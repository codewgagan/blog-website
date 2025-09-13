// Import required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Initialize environment variables
dotenv.config();

// create Express app
const app = express();
const PORT = 5000;

app.use(express.json());

// Test route
app.get("/",(req,res)=>{
    res.send({message: "Hello"})
})

app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`);
    
})