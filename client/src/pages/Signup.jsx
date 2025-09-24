import { useState } from "react";
import API from "../api.js";

// Signup function
function signUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // handlechanage
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // handlesubmit
  const handleSubmit = async (e) => {
    e.prevntDefault();
    try {
      await API.post("/auth/signup", form);
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
          placeholder="Name"
          className="border p-2 mb-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-2 mb-2 w-full rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
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
