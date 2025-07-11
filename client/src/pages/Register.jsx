
import { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/register', { username, password });
      toast.current.show({ severity: 'success', summary: 'Registered', detail: res.data.message });
      setTimeout(() => navigate('/'), 1500);

    } catch (err) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: err.response.data.message });
    }
  };

  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <Toast ref={toast} />
      <Card title="Register" className="w-25rem">
        <div className="p-fluid">
          <label>Username</label>
          <InputText value={username} onChange={(e) => setUsername(e.target.value)} />
          <label className="mt-3">Password</label>
          <Password value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} />
          <Button label="Register" className="mt-4" onClick={handleRegister} />
          <Button label="Go to Login" onClick={() => navigate('/login')} className="mt-2" />
        </div>
      </Card>
    </div>
  );
};

export default Register;
