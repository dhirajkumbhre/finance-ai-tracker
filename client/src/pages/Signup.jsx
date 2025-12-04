import { useState } from "react";
import { signupUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      console.log("Registered:", res.data);
      navigate("/login");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-8 shadow rounded">
      <h2 className="text-xl mb-4">Create Account</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-black text-white px-4 py-2 w-full">Sign up</button>
      </form>
    </div>
  );
}
