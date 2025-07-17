// import { Card } from 'primereact/card';

// const Dashboard = () => {
//   return (
//     <div className="flex justify-content-center align-items-center min-h-screen">
//       <Card title="Welcome to the Dashboard!" className="w-25rem">
//         <p>You are now logged in.</p>
//       </Card>
//     </div>
//   );
// };

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [crypto, setCrypto] = useState(null);
  const username = localStorage.getItem('username');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


    const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login'); // ✅ redirects to login
  };



  useEffect(() => {
    if (!username) return;

    console.log('Username from localStorage:', username);

    axios.get(`http://localhost:3001/api/crypto/${username}`)

      .then(res => {
        console.log('Full response:', res.data); //Log entire response
        if (res.data) {
          setCrypto(res.data);
        } else{
          console.error('No data in response');
        }
        
        })
      
      .catch(err => {
        console.error('Full error:', err);
        if (err.response){
          console.error('Response data:',err.response.data);
          console.error('Response status', err.response.status);
        }
      });
      
  }, [username]);
  

  return (
    <><Navbar/>
    <div>
    <div className="flex justify-end items-center mb-0">
      <button label='Logout'
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
      </div>

    <div className="p-8" >
      
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
          My Crypto Portfolio
        </h1>
        

        {username && (
          <div className="mb-6 text-center text-lg">
            Welcome, <strong>{username}</strong>
          </div>
        )}

        {crypto ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {crypto.coins.map((coin, index) => (
              <Card
                key={index}
                title={`${coin.name}`}
                subTitle={<Tag value={coin.symbol} severity="info" className="ml-2" />}
                className="shadow-2 border-1 surface-border"
              >
                <p><strong>Quantity:</strong> {coin.quantity}</p>
                <p><strong>Price:</strong> ₹{coin.price}</p>
                <p><strong>Total:</strong> ₹{(coin.quantity * coin.price).toLocaleString()}</p>
                <ProgressBar
                  value={(coin.quantity * coin.price * 100) / crypto.totalCryptoValue}
                  showValue={false}
                  className="mt-3"
                />
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center mt-0">Loading your crypto portfolio...</p>
        )}
      </div>
      </div>

    </>
  
  );

};

export default Dashboard;


    // <div className="p-6">
    //   <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
    //     My Crypto Portfolio
    //   </h1>

    //   {crypto ? (
    //     <>
    //       <div className="mb-6 text-center text-lg">
    //         Welcome, <strong>{crypto.username}</strong><br />
    //         Total Crypto Value: <span className="text-green-600 font-semibold">₹{crypto.totalCryptoValue.toLocaleString()}</span>
    //       </div>

    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    //         {crypto.coins.map((coin, index) => (
    //           <Card
    //             key={index}
    //             title={`${coin.name} `}
    //             subTitle={
    //               <Tag value={coin.symbol} severity="info" className="ml-2" />
    //             }
    //             className="shadow-2 border-1 surface-border"
    //           >
    //             <p><strong>Quantity:</strong> {coin.quantity}</p>
    //             <p><strong>Price per Coin:</strong> ₹{coin.price.toLocaleString()}</p>
    //             <p><strong>Total Value:</strong> ₹{(coin.quantity * coin.price).toLocaleString()}</p>
    //             <ProgressBar value={(coin.quantity * coin.price * 100) / crypto.totalCryptoValue} showValue={false} className="mt-3" />
    //           </Card>
    //         ))}
    //       </div>
    //     </>
    //   ) : (
    //     <p className="text-center">Loading your crypto portfolio...</p>
    //   )}
    // </div>

