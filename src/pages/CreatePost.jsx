import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function CreatePost() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Technology",
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
      await API.post("/posts", formData);

      toast.success("Post Created Successfully");

      navigate("/");
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="rounded-3xl bg-slate-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Create New Post
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <select
            name="category"
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          >
            <option>Technology</option>
            <option>Programming</option>
            <option>AI</option>
            <option>Education</option>
            <option>Travel</option>
            <option>Lifestyle</option>
          </select>

          <textarea
            rows="8"
            name="content"
            placeholder="Write your blog..."
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <button className="rounded-xl bg-cyan-600 px-6 py-3">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;