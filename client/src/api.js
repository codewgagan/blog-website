import axios from "axios";

const API = axios.create({
    baseURL: "http:localhost:5000.api/blogs"
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