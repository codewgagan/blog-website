import { useState } from "react";
import API from "../api.js";

// Signup function
function signUp() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  // handlechanage
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
       // ✅ log the full response
      console.log("Signup Response:", res.data);
      alert("Signup successful chal login kar.");
    } catch (err) {
      alert(err.response?.data?.error || "kuch galat ho gaya hai bhai");
    }
  };

  return (
    <div className="flex justify-center">
      <form className="bg-white" onSubmit={handleSubmit}>
        <h2 className="text-xl mb-4">Signup Page</h2>
        <input
          type="text"
          name="username"
          placeholder="Name"
          className="border p-2 mb-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="border p-2 mb-2 w-full rounded-md"
          onChange={handleChange}
        />
        <button className="bg-blue-600 rounded px-4 py-2 text-white" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default signUp;
