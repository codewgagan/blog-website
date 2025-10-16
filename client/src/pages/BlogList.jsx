import { useEffect, useState } from "react";
import { getBlogs } from "../api/blogService";
import {Link} from "react-router-dom";

function BlogList() {
  // state for set blogs in array
  const [blogs, setBlogs] = useState([]);

  // fetching blogs using useEffect
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        console.log("Fetched Blogs", res.data);
        
        setBlogs(res.data);
      } catch (error) {
        console.log("Error fetching blogs", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">All blogs</h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id} className="p-4 mb-4 border rounded shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-700 mt-2">{blog.content}</p>
            <p className="">Author:{blog.author}</p>
            <p>{blog.content.slice(0,100)}...</p>
            <Link
            to={`/blog/${blog._id}`}
            className="">Read More →</Link>
          </div>
        ))
      ) : (
        <p>No Blogs</p>
      )}
    </div>
  );
}

export default BlogList;
