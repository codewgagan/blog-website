import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between" >
      {/* <h1 className="text-xl font-bold">My Blog</h1> */}

      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/create">Create Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
