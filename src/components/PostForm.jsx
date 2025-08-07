import { useState } from 'react';

export default function PostForm() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send post content to backend
    console.log("Post content:", content);
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-5 mb-6 border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Create a Post</h2>

      <textarea
        placeholder="Share your achievement..."
        className="w-full h-24 resize-none border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition duration-200"
      >
        Post
      </button>
    </form>
  );
}
