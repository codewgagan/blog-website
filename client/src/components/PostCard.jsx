function PostCard({ title, body }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition mb-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}

export default PostCard;
