import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Title */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Groww 
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
