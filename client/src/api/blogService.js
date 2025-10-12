import API from "../api.js";

// Get all blogs (public)
export const getBlogs = () => API.get("/api/blogs");

// Create new blog (protected)
export const createBlog = async (blogData, token) =>
  API.post("/api/blogs", blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
// Update blog (protected)
export const updateBlog = (id, blogData) =>
  API.put(`/api/blogs/${id}`, blogData);
// Delete blog (protected)

export const deleteBlog = (id) => API.delete(`/api/blogs/${id}`);
