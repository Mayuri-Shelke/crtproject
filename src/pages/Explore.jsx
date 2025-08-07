// src/pages/Explore.jsx
import ProfileCard from '../components/Profilecard';

export default function Explore() {
  const dummyUsers = [
    { _id: '1', name: 'Alice', major: 'CSE', photoUrl: '' },
    { _id: '2', name: 'Bob', major: 'IT', photoUrl: '' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Students</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyUsers.map(user => (
          <ProfileCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}
