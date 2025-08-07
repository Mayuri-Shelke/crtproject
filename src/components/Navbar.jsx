import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">StudentHub</h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-200 transition duration-200">Home</Link>
          <Link to="/explore" className="hover:text-gray-200 transition duration-200">Explore</Link>
          <Link to="/login" className="hover:text-gray-200 transition duration-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200 transition duration-200">Register</Link>
        </div>
      </div>
    </nav>
  );
}

