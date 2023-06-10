import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        totalQuantity:0
    },
    reducers:{
        addToCart(state, action){
            const newItem= action.payload
            console.log(newItem)
            const existingItem=state.cartList.find(item=>item._id===newItem._id);
            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice+=existingItem.price
            }else{
                state.cartList.push({
                    _id:newItem._id,
                    image:newItem.image,
                    quantity:1,
                    price:newItem.price,
                    totalPrice:newItem.price,
                    name:newItem.name
                })
            }
            state.totalQuantity++
            toast.success("Product is Added to Cart")
        },
        removeFromCart(state,action){
            const id=action.payload;

            const existingItem=state.cartList.find(cart=>cart._id===id)
            if(existingItem.quantity===1){
                state.cartList= state.cartList.filter(cart=>cart._id!==id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice-=existingItem.price;
            }
            state.totalQuantity--
            toast.success("Product was removed from cart")
        }

    },
})

export const cartActions= cartSlice.actions;
export default cartSlice;