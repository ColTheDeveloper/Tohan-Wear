import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

//get a user
export const getUser= async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await userModel.findById(id)
        if (user) {
            const { password, ...otherDetails } = user._doc;      
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("No such User");
        }

    }catch(error){
        res.status(500).json({message:error.message});
    }
}
//get all user
export const allUsers=async (req,res)=>{
    console.log(req.body)
    const {isAdmin}=req.body
    if(isAdmin){
        try {
            let users=await userModel.find()
            users = users.map((user)=>{
                const {password, ...otherDetails} = user._doc
                return otherDetails
            })
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({message:error.message})            
        }
    }else{
        res.status(400).json("action forbidden")
    }
}

//edit a users account

export const editUser=async (req,res)=>{
    const id=req.params.id;
    const {_id, password}=req.body;
    if(id==_id ){
        try {
            if(password){
                const salt=await bcrypt.genSalt(10)
                req.body.password= await bcrypt.hash(password, salt);
            }
            const user= await userModel.findByIdAndUpdate(id,req.body,{new:true});
            const { ...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    }else{
        res.status(400).json("action forbidden");
    }
}


//delete a users account

export const deleteUser= async (req,res)=>{
    const id=req.params.id;
    console.log(req.body.user)
    const {_id, isAdmin, password}= req.body.user;
    if(id==_id || isAdmin){
        try{
            await userModel.findByIdAndDelete(id);
            res.status(200).json("Account has been Successfully Deleted")
        }catch(error){
            res.status(500).json({error})
        }
    }
}