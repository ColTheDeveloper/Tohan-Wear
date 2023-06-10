import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { editAProduct, getAProduct } from "../../api/ProductRequest";

export const fetchAProduct=createAsyncThunk("selectedProduct/fetchAProduct", async (id)=>{
    try {
        const response=await getAProduct(id)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
    
})
export const editProduct=createAsyncThunk("selectedProduct/editProduct", async ({_id,user,productData})=>{
    try {
        const res=await editAProduct({_id,user,productData})
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})

const selectedProductSlice=createSlice({
    name:"selectedProduct",
    initialState:{
        product:{}
    },
    reducers:{
        selectedProduct(state,action){
            const product= action.payload
            state.product=product
        },
        removeProduct(state,action){
            state.product={}
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchAProduct.fulfilled, (state,action)=>{
                state.product= action.payload
            })
            .addCase(editProduct.fulfilled,(state,payload)=>{
                toast.success("Product Successfully Edited")
            })
    }
    
})
export const selectedProductActions= selectedProductSlice.actions
export default selectedProductSlice; 