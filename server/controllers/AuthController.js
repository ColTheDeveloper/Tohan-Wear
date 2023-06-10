import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const maxAge=3*24*60*60
//createToken
const createToken=(id)=>{
    return(
        jwt.sign({id}, process.env.SECRET,{
            expiresIn:maxAge
        })
    )
}

const handleErrors=(err)=>{
    let errors={emailAddress:"",password:"",firstName:"",lastName:"",phoneNumber:""};
    if(err.message==="incorrect Email") errors.emailAddress="email is not registered"
    if(err.message==="incorrect password") errors.email="incorrect password"

    if(err.code===11000){
        errors.emailAddress="email is already Registered";
        return errors
    }
    if(err.message.includes("Users validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }
    return errors;
}

//create a user

export const registerUser= async (req,res)=>{
    const salt= await bcrypt.genSalt(10);
    const hashpassword= await bcrypt.hash(req.body.password, salt);
    req.body.password= hashpassword;
    const newUser = new userModel(req.body);
    const {emailAddress} = req.body
    try{
        //const existUser= await userModel.findOne({emailAddress});
        //if(existUser){
          //  res.status(400).json( "email is already Registered");
        //}else{
            await newUser.save();
            const token=createToken(newUser._id);
            res.cookie("jwt",token,{
                withCredentials:true,
                httpOnly:false,
                maxAge:maxAge*1000
            })
            const {password, ...otherDetails}=newUser._doc
            res.status(201).json(otherDetails);
        //}
    }catch(err){
        const errors=handleErrors(err)
        res.json({errors})
    }
};

//login a user

export const loginUser= async (req,res)=>{
    try{
        const foundUser= await userModel.findOne({emailAddress:req.body.emailAddress});
        if(foundUser){
            const validity = await bcrypt.compare(req.body.password , foundUser.password);
            if(validity==true){
                const token=createToken(foundUser._id);
                res.cookie("jwt",token,{
                    withCredentials:true,
                    httpOnly:false,
                    maxAge
                })
                const {password, ...otherDetails}=foundUser._doc
                res.status(200).json(otherDetails);
            }else{
            res.status(500).json("Incorrect Password")}

        }else{
            res.status(500).json("Incoorect Email")
        }

    }catch(error){
        res.status(500).json({message: error.message});
    }
};