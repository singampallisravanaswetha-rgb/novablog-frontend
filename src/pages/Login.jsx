import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setUser(res.data.user);

      toast.success("Login Successful");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
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
            className="w-full rounded-xl bg-cyan-500 p-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;