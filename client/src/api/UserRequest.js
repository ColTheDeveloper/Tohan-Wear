import axios from 'axios'

const apiUrl= process.env.REACT_APP_API_URL

const API= axios.create({baseURL:apiUrl})

export const editAUser=({data,_id})=>API.put(`/user/${_id}`, data)
export const deleteUser=({user,_id})=>API.delete(`/user/${_id}`,{data:{user}})
export const allUser=(user)=>API.post("/user",user)
export const getAUser=(id)=>API.get(`/user/${id}`)