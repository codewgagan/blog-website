import { useState } from "react";
import API from "../api.js";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // api response for login
      const res = await API.post("/auth/login", form);
      // storing data in local storage using token

       // ✅ log the full response
      console.log("Login Response:", res.data);
      
      localStorage.setItem("token", res.data.token);
      // alert msg
      alert("Login Succesful");
      // redirect
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;