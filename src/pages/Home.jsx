import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Student Feed</h1>

        {/* Post Form */}
        <PostForm />

        {/* Posts Section */}
        <div className="space-y-6">
          {/* TODO: Replace with dynamic posts from backend */}
          <PostCard post={{ name: "John Doe", content: "Won Hackathon!" }} />
          <PostCard post={{ name: "Jane Smith", content: "Published a research paper on AI ethics." }} />
        </div>
      </div>
    </div>
  );
}
