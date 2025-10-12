import axios from "axios";
import { useEffect } from "react";

const API = axios.create({
    baseURL: "http://localhost:5000"
});

// Attach token automatically if exists
API.interceptors.request.use((req)=>{
    // create token and get it from localstorage
    const token = localStorage.getItem("token");
    // if token exists return req
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
})

export default API;