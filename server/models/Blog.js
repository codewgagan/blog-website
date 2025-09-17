import mongoose from "mongoose";
import { timestamp } from "rxjs";

const blogSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author:{
    type: String,
    default: "Anonymus",
  },
},
{timestamps:true}
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
