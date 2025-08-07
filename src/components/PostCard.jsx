export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-6 border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Header: Avatar + Name + Timestamp */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {post.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{post.name}</h2>
        </div>
        <span className="text-sm text-gray-500">Just now</span> {/* Replace with actual timestamp if available */}
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">{post.content}</p>

      {/* Footer: Actions */}
      <div className="mt-4 flex space-x-6 text-sm text-blue-600 font-medium">
        <button className="hover:underline">Like</button>
        <button className="hover:underline">Comment</button>
      </div>
    </div>
  );
}
