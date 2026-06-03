import { useEffect, useState } from "react";
import API from "../api/axios";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-900 p-6">
          <h2>Total Posts</h2>

          <p className="mt-3 text-4xl font-bold">
            {posts.length}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6">
          <h2>Latest Post</h2>

          <p className="mt-3">
            {posts[0]?.title || "No Posts"}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6">
          <h2>Platform</h2>

          <p className="mt-3">NovaBlog</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;