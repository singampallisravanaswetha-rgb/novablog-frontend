import { useEffect, useState } from "react";
import API from "../api/axios";
import BlogCard from "../components/BlogCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-purple-700 p-10">
        <h1 className="mb-4 text-5xl font-bold">
          🚀 Welcome to NovaBlog
        </h1>

        <p className="text-lg">
          Write your ideas. Share your knowledge.
          Build your audience.
        </p>
      </div>

      <div className="mt-8">
        <input
          type="text"
          placeholder="🔍 Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl bg-slate-900 p-4 outline-none"
        />
      </div>

      <div className="mt-10">
        <h2 className="mb-5 text-3xl font-bold">
          🔥 Latest Blogs
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;