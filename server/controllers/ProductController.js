import mongoose from "mongoose";
import productModel from "../models/productModel.js";

//create a Product

export const createProduct= async (req, res)=>{
   const newProduct= new productModel(req.body);

   try{
    await newProduct.save();
    res.status(200).json(newProduct);
   } catch(error){
    res.status(500).json(error);
   }
};

//get a Product

export const getProduct= async (req,res)=>{
    const id=req.params.id;

    try{
        const product= await productModel.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json(error);
    }
};

//get all product

export const allproduct= async (req,res)=>{
    try {
        const product= await productModel.find();
        res.status(200).json(product.sort((a,b)=> -1))
    } catch (error) {
        res.status(500).json(error)
        
    }
};

//get a product by brand

export const getProductByBrand= async (req,res)=>{
    const brand=req.params.brand;
    try {
        const foundProduct=await productModel.find({brand:brand});
        res.status(200).json(foundProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get a product by category

export const getProductByCategory= async (req,res)=>{
    const category=req.params.category;
    try {
        const foundProduct=await productModel.find({category:category});
        res.status(200).json(foundProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//edit a product

export const editProduct= async (req,res)=>{
    const id=req.params.id;
    const {isAdmin}=req.body.user
    if(isAdmin){
        try{
            const product= await productModel.findByIdAndUpdate(id, req.body.productData,{new:true})
            res.status(200).json(product)
        }catch(error){
            res.status(500).json({message:error.message});
        }
    }else{
        res.status(500).json("action forbidden")
    }
}

//delete a product

export const deleteProduct= async (req,res)=>{
    const id=req.params.id;
    const {isAdmin}=req.body.user
    if(isAdmin){
        try{
            await productModel.findByIdAndDelete(id);
            res.status(200).json("Product Successfully deleted");
        }catch(error){
            res.status(500).json(error);
        }
    }else{
        res.status(400).json("Action Forbidden")
    }
};