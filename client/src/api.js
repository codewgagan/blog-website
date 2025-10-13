import axios from "axios";
import { useEffect } from "react";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

// Attach token automatically if exists
API.interceptors.request.use((req)=>{
    // create token and get it from localstorage
    const token = localStorage.getItem("token");
    // if token exists return req
    if(token){
        req.headers.Authorization = `Bearer ${token}`
        console.log("🟢 Token attached:", token);
        
    }else{
        console.warn("🔴 No token found in localStorage");
        
    }
    return req;
})

export default API;