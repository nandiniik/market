import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center text-blue"
      style={{
        backgroundImage: "url('/img1.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h1 className="text-4xl font-bold ml-6 mb-4">Welcome to Groww </h1>
        <p className="mb-6">Invest Smartly. Securely. Instantly.</p>
        <div className="flex justify-center gap-4">
          <Button label="Login" onClick={() => navigate('/login')} className="p-button-rounded p-button-info" />
          <Button label="Register" onClick={() => navigate('/register')} className="p-button-rounded p-button-success" />
          <Button label="Stocks" onClick={() => navigate('/Stocks')} className='p-button-rounded p-button-info'/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
