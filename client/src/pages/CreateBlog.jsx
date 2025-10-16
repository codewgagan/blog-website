import { useState } from "react";
import { createBlog } from "../api/blogService.js";

function CreateBlog() {
  // state to store blog input data (title, content, author)
  const [form, setForm] = useState({ title: "", content: "" });

  // handle input changes dynamically using name attribute
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page reload on form submit
    // const token = localStorage.getItem("token");
    try {
      // API call to create new blog post
      const response = await createBlog(form);
      console.log("Blog created successfully:", response.data);

      // clear form after successful creation
      setForm({ title: "", content: "" });
    } catch (error) {
      console.error("Error while creating blog", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Blog</h2>
      {/* form for creating a new blog */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* title input */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter title"
          className="w-full p-2 border rounded"
          required
        />

        {/* contnet input */}
        <textarea 
        name="content" 
        value={form.content}
        onChange={handleChange}
        placeholder="Enter contnet"
        className="w-full p-2 border rounded"
        required
        
        />

        {/* Submit button */}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Create blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
