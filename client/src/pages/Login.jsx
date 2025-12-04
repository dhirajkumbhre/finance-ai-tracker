import { useState } from "react";
import { loginUser } from "../services/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    console.log(res.data);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white p-8 shadow rounded">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <input className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-black text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
}
