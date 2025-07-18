import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';




import { useNavigate } from 'react-router-dom';
import Stocks from './pages/Stocks';
// const navigate = useNavigate();


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </Router>
  );
}

export default App;



