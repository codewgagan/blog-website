// Import required modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Test from "./models/Test.js";

// import { config } from "yargs";
// Initialize environment variables
dotenv.config();

// connect mongoDB
connectDB();

// create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/testdb", async (req, res) => {
  //   res.send("Hello");
  try {
    const doc = new Test({ name: "Hello MongoDB" });
    await doc.save();
    res.send("Test document saved successfully");
  } catch (error) {
    res.status(500).send("Error:" + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
