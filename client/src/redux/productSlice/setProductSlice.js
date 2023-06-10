import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { allProduct, createAProduct } from "../../api/ProductRequest";

export const fetchedProducts=createAsyncThunk("setProduct/fetchedProducts", async ()=>{
    const response= await allProduct()
    return response.data
})
export const createProduct=createAsyncThunk("setProduct/createProduct", async (productData)=>{
    try {
        const res=await createAProduct(productData)
        console.log(res.data)
    } catch (error) {
        console.log(error)
        
    }
})

const setProductSlice=createSlice({
    name:"setProduct",
    initialState:{
        product:[]
    },
    reducers:{
        setProduct(state, action){
            const allProduct= action.payload;
            state.product=allProduct;
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchedProducts.fulfilled, (state,action)=>{
                state.product= action.payload
            })
            .addCase(createProduct.fulfilled, (state,action)=>{
                toast.success("New Product Successfully Created")
            })
    }

})
export const setProductActions= setProductSlice.actions;
export default setProductSlice;