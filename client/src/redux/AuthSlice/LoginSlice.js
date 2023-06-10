import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { logIn, signUp } from "../../api/AuthRequest"
import { deleteUser, editAUser } from "../../api/UserRequest"
import {toast} from "react-toastify"

export const fetchUser=createAsyncThunk("login/fetchUser", async (data)=>{
    try {
        const response= await logIn(data)
        
        return response
    } catch (error) {
        console.log(error.message)
        
    }
})


const generateErrors=(err)=>toast.error(err)

export const registerUser=createAsyncThunk("login/registerUser", async (data)=>{
    try {
        const response=await signUp(data)
        if(response.data){
            if(response.data.errors){
                
                const {password,firstName,lastName,phoneNumber,emailAddress}=response.data.errors
                if(emailAddress){
                    generateErrors(emailAddress)
                }else if(firstName){
                    generateErrors(firstName)
                }else if(lastName){
                    generateErrors(lastName)
                }else if(phoneNumber){
                    generateErrors(phoneNumber)
                }else if(password){
                    generateErrors(password)
                }
                

            }else{
                return response
            }
        }
        
        
    } catch (error) {
        console.log(error.message)
    }
})

export const editUser=createAsyncThunk("login/editUser", async ({data,_id})=>{
    try{
        const response=await editAUser({data,_id})
        return response

    }catch(error){
        console.log(error)
    }
})

export const deleteAccount=createAsyncThunk("login/deleteAccount",async({_id,user})=>{
    try {
        const response=await deleteUser({_id,user})
        
        console.log(response)
        return response 
    } catch (error) {
        console.log(error.message)
        
    }
})

const loginSlice=createSlice({
    name:"login",
    initialState:{
        user:null,
        isloggedin:false

    },
    reducers:{
        login(state,action){
            state.user=action.payload.data
            state.isloggedin=true
        },
        logoutUser(state){
            state.user=null
        }

    },
    extraReducers(builder){
        builder
            .addCase(fetchUser.fulfilled, (state,action)=>{
                if(action.payload.status===200){
                    state.user=action.payload.data
                    state.isloggedin=true
                    toast.success("LogIn Successfully")
                    

                }else{
                    console.log("Log In failed")
                }
    
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                
                if(action.payload.status===201){
                    state.user=action.payload.data
                    state.isloggedin=true
                    toast.success("Account Registered")
                    
                }else{

                }
                
            })
            .addCase(editUser.fulfilled, (state,action)=>{
                if(action.payload.status===200){
                    state.user=action.payload.data
                    toast.success("successfully updated your profile")
                }else{
                    console.log("updating failed")
                }
                
            })
            .addCase(deleteAccount.fulfilled,(state,action)=>{
                console.log(action)
            })

    }
})
export const loginActions=loginSlice.actions
export default loginSlice;