import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const fetchPost = async () => {
    try {
      const res = await API.get(`/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

    try {
      await API.post(`/comments/${id}`, {
        text,
      });

      setText("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="rounded-3xl bg-slate-900 p-8">
        <span className="rounded-full bg-purple-600 px-3 py-1 text-xs">
          {post.category}
        </span>

        <h1 className="mt-4 text-4xl font-bold">
          {post.title}
        </h1>

        <p className="mt-3 text-slate-400">
          By {post.author?.username}
        </p>

        <div className="mt-8 whitespace-pre-wrap text-lg">
          {post.content}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="rounded-xl bg-yellow-600 px-5 py-2"
          >
            Edit Post
          </button>

          <button
            onClick={deletePost}
            className="rounded-xl bg-red-600 px-5 py-2"
          >
            Delete Post
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-slate-900 p-8">
        <h2 className="mb-4 text-2xl font-bold">
          Comments
        </h2>

        <form onSubmit={addComment} className="mb-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full rounded-xl bg-slate-800 p-4"
          />

          <button className="mt-3 rounded-xl bg-cyan-600 px-6 py-2">
            Add Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="rounded-xl bg-slate-800 p-4"
            >
              <p className="font-semibold">
                {comment.user?.username}
              </p>

              <p className="mt-2">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;