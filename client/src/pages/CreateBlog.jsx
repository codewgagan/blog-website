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
    <div>
      <h2>Create Blog</h2>
      {/* form for creating a new blog */}
      <form onSubmit={handleSubmit}>
        {/* title input */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />

        {/* contnet input */}
        <textarea 
        name="content" 
        value={form.content}
        onChange={handleChange}
        placeholder="Enter contnet"
        required
        
        />

        {/* Submit button */}
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
