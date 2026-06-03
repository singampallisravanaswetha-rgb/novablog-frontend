import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const res = await API.get(`/posts/${id}`);

    setFormData({
      title: res.data.title,
      content: res.data.content,
      category: res.data.category,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/posts/${id}`, formData);

      toast.success("Post Updated");

      navigate(`/post/${id}`);
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-8">
      <div className="rounded-3xl bg-slate-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Edit Post
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          >
            <option>Technology</option>
            <option>Programming</option>
            <option>AI</option>
            <option>Education</option>
          </select>

          <textarea
            rows="8"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-3"
          />

          <button className="rounded-xl bg-cyan-600 px-6 py-3">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;