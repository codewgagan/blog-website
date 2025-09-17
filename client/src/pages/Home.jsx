import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome to My Blog Website</h1>
      <p className="text-gray-500">This is the Home page</p>
      <div>
        {posts.map((posts)=>(
          <PostCard key={posts.id} title={posts.title} body={posts.body} />
        ))}
      </div>
    </div>
  );
}

export default Home;
