import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/blogs" style={{ marginRight: "10px" }}>
        Blogs
      </Link>
      <Link to="/create">Create Blog</Link>
      <Link to="/" style={{}} >akdb</Link>
    </nav>
  );
}

export default Navbar;
