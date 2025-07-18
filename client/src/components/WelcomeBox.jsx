import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const WelcomeBox = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black bg-opacity-70 p-8 rounded-xl text-center max-w-2xl mx-4 text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Welcome to Groww</h1>
      <p className="my-6 text-lg">Invest Smartly. Securely. Instantly.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          label="Login"
          onClick={() => navigate('/login')}
          className="p-button-rounded p-button-raised p-button-info font-medium"
        />
        <Button
          label="Register"
          onClick={() => navigate('/register')}
          className="p-button-rounded p-button-raised p-button-success font-medium"
        />
        <Button
          label="Stocks"
          onClick={() => navigate('/Stocks')}
          className="p-button-rounded p-button-raised p-button-info font-medium"
        />
      </div>
    </div>
  );
};

export default WelcomeBox;
