import express from "express";
import Blog from "../models/Blog.js";
import authMiddleware from "../middleware/authMiddleware.js";

// create router
const router = express.Router();

// @desc Get all blogs
// @route   GET /api/blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @desc    Create new blog
// @route   POST /api/blogs
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author: req.user.id }); // logged-in user's ID
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
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    // const { title, content, author } = req.body;
    const blog = await Blog.findById(
      req.params.id
      // { title, content, author },
      // { new: true }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
    const updatedBlog = await blog.save();

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// @desc    Delete blog
// @route   DELETE /api/blogs/:id
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ error: "Not authorized" });
    }
    await blog.deleteOne();
    res.json({ message: "Blog deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
