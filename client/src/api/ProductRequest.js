import axios from 'axios'

const apiUrl= process.env.REACT_APP_API_URL

const API= axios.create({baseURL: apiUrl})

export const getAProduct=(id)=>API.get(`/product/${id}`);

export const allProduct=()=>API.get("/product");

export const createAProduct=(productData)=>API.post("/product", productData)

export const deleteAProduct=({_id,user})=>API.delete(`/product/${_id}`,{data:{user}})

export const editAProduct=({_id,user,productData})=>API.put(`/product/${_id}`,{user,productData})

