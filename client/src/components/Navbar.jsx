import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-250">
      {/* Logo / Title */}
      <Link to="/" className=" p-2 text-4xl  font-bold text-blue-600">
        Groww 
      </Link>
      <br></br>

      {/* Navigation Links */}
      <div className="ml-6 bg-green-100 p-4 flex gap-6">
        {/* <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link> */}
        <Link to="/login" className="text-gray-700 p-button rounded hover:text-blue-600">Login/Register</Link>
        {/* <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link> */}
        
      </div>
      
        {/* <Button icon="pi pi-sun" onClick={toggleTheme} /> */}

    </div>
  );
};

export default Navbar;
