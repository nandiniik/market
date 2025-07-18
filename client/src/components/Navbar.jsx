
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl px-4 font-bold text-blue-600">Groww</span>
          </Link>
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Register
            </Link>
            <Link to="/Stocks" className="px-4 py-2 bg-blue-600 text-gray-800 text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
               Stocks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;