// pages/Profile.jsx
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();

  // Fetch user profile from backend using ID
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">User Name</h1>
      <p className="mb-4">Bio or achievements</p>
      {/* Show user’s posts */}
    </div>
  );
}
