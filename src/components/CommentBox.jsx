function CommentBox({ comment }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-4">
      <p className="font-semibold">
        {comment.user?.username}
      </p>

      <p className="mt-2">
        {comment.text}
      </p>
    </div>
  );
}

export default CommentBox;