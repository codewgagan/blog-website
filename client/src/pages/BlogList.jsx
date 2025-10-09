import { useEffect, useState } from "react";
import { getBlogs } from "../api/blogService";

function BlogList() {
  // state for set blogs in array
  const [blogs, setBlogs] = useState([]);

  // fetching blogs using useEffect
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getBlogs();
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div>
      <h2>All blogs</h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No Blogs</p>
      )}
    </div>
  );
}

export default BlogList;
