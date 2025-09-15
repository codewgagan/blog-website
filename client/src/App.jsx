import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import "./App.css";

function App() {
  return (
    
    <Router>
      <Navbar />
      <h1 className="text-3xl font-bold text-blue-500 underline">
      Tailwind is working! 🎉
    </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogDetails />} />
        <Route path="/blogslist" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
