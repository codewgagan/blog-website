import API from "../api.js";

// Get all blogs (public)
export const getBlogs = () => API.get("/blogs");

// Create new blog (protected)
export const createBlog =async (blogData) => API.post("/blogs", blogData);
// Update blog (protected)
export const updateBlog = (blogData) => API.put(`/blogs/${id}`, blogData);
// Delete blog (protected)

export const deleteBlog = (id) => API.delete(`/blogs/${id}`); 
