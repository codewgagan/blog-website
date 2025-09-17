import express from "express";
import Blog from "../models/Blog.js";

// create router
const router = express.Router();

// @desc Get all blogs
// @route   GET /api/blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
});
// @desc    Create new blog
// @route   POST /api/blogs
router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @desc    Get single blog by ID
// @route   GET /api/blogs/:id
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @desc    Update blog
// @route   PUT /api/blogs/:id
router.put("/:id", async (req, res) => {
  try {
    const { title, content, autor } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, autor },
      { new: true }
    );

    if (!updatedBlog)
      return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @desc    Delete blog
// @route   DELETE /api/blogs/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deleteBlog) return res.status(404).json({ message: "Blog not found" });
    res.json("Blog deleted Successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;