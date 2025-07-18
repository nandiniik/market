
import { useState ,useRef, useEffect} from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';




const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordMismatch, setShowPasswordMismatch] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();


  // Validate form whenever inputs change
  useEffect(() => {
    const passwordsMatch = password === confirmPassword;
    setShowPasswordMismatch(confirmPassword.length > 0 && !passwordsMatch);
    setIsFormValid(username.length > 0 && password.length > 0 && passwordsMatch);
  }, [username, password, confirmPassword]);



  const handleRegister = async () => {
     if (!isFormValid) {
      toast.current.show({ 
        severity: 'error', 
        summary: 'Error', 
        detail: 'Please fill all fields correctly' 
      });
      return;
    }
    try {
      const res = await axios.post('http://localhost:3001/api/auth/register', { username, password });
      toast.current.show({ severity: 'success', summary: 'Registered', detail: res.data.message });
      setTimeout(() => navigate('/login'), 1500);

    } catch (err) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: err.response.data.message });
    }
  };

  

  return (
    <><Navbar/>
    <div className="flex justify-content-center align-items-center min-h-screen" style={{backgroundImage : "url('9638.jpg')",backgroundSize: "cover",    backgroundPosition: "center", backgroundRepeat: "no-repeat",  }}>
      <Toast ref={toast} />
      <Card title="Register" className="w-25rem">
        <div className="p-fluid">
          <label>Username</label>
          <InputText value={username} onChange={(e) => setUsername(e.target.value)} />
          <label className="mt-3">Password</label>
          <Password value={password} onChange={(e) => setPassword(e.target.value)}toggleMask feedback={false} />
          <label className="mt-4">Confirm Password</label>
          <Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}toggleMask feedback={false} 
            className={showPasswordMismatch ? 'p-invalid' : ''}/>
          {showPasswordMismatch && (<small className="p-error">Passwords do not match</small>)}

          <Button label="Register" className="mt-4" onClick={handleRegister} disabled={!isFormValid}/>
          <Button label="Go to Login" severity='secondary' onClick={() => navigate('/login')} className="mt-2" />
        </div>
      </Card>
    </div>
    </>
  );
};

export default Register;
