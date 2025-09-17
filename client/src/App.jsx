import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route></Route>
        <Route path="/blogs" element={<BlogDetails />} />
        <Route path="/blogslist" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit" element={<EditBlog />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
