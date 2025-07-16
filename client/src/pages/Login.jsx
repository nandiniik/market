import { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef(null);
  const navigate = useNavigate();



  // const handleLogin = () => {
  //   if (username === 'admin' && password === 'admin123') {
  //     toast.current.show({ severity: 'success', summary: 'Login Success', detail: 'Welcome!' });
  //   } else {
  //     toast.current.show({ severity: 'error', summary: 'Login Failed', detail: 'Invalid credentials' });
  //   }
  // };

  const handleLogin = async () => {
  try {
    const res = await axios.post('http://localhost:3001/api/login', {

      username,
      password,
    });
    toast.current.show({ severity: 'success', summary: 'Login Success', detail: res.data.message });
    setTimeout(() => navigate('/dashboard'), 1500);

  } catch (err) {
    const errorMessage =
    err.response?.data?.message || 'Something went wrong. Please try again.';
    
    toast.current.show({ severity: 'error', summary: 'Login Failed', detail: errorMessage });
  }
};




  return (
    <><Navbar/>
    <div className="flex justify-content-center align-items-center min-h-screen"
      style={{backgroundImage : "url('17973908.jpg')",}}>
      <Toast ref={toast} />
      <Card title="Login to My Page" className="w-25rem">
        <div className="p-fluid">
          <label htmlFor="username" className="mb-2">Username</label>
          <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password" className="mt-3 mb-2">Password</label>
          <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />

          <Button label="Login" className="mt-4" onClick={handleLogin} />
          <Button label="Go to Register" severity="secondary" onClick={() => navigate('/register')} className="mt-2" />

        </div>
      </Card>
    </div>
    </>
  );
};

export default Login;
