import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/register",
        formData
      );

      toast.success("Registration Successful");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Register
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <button
            className="w-full rounded-xl bg-purple-600 p-3"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;