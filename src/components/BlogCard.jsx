import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
      <span className="rounded-full bg-purple-600 px-3 py-1 text-xs">
        {post.category || "General"}
      </span>

      <div className="mb-3 mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 font-bold">
          {post.author?.username?.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-semibold">
            {post.author?.username}
          </p>

          <p className="text-sm text-slate-400">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <h2 className="mb-3 text-xl font-bold">
        {post.title}
      </h2>

      <p className="mb-4 text-slate-400">
        {post.content.substring(0, 100)}...
      </p>

      <Link
        to={`/post/${post._id}`}
        className="font-semibold text-cyan-400"
      >
        Read More →
      </Link>
    </div>
  );
}

export default BlogCard;