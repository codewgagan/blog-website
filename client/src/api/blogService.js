import API from "../api.js";

// Get all blogs (public)
export const getBlogs = () => API.get("/blogs");

// Create new blog (protected)
export const createBlog = () => API.post("/blogs", blogData);
// Update blog (protected)
export const updateBlog = () => API.put(`/blogs/${id}`, blogData);
// Delete blog (protected)

export const deleteBlog = () => API.delete(`/blogs/${id}`); 
