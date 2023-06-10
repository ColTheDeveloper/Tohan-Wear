import axios from 'axios'

const apiUrl= process.env.REACT_APP_API_URL

const API = axios.create({ baseURL: apiUrl });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData,{
    withCredentials:true
});

