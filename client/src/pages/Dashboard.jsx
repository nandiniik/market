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

const Dashboard = () => {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/crypto')
      .then(res => setCrypto(res.data))
      .catch(err => console.error('API error:', err));
  }, []);

  return (
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
    <><Navbar/>
    <div className="flex justify-content-center align-items-center min-h-screen">
     
        <Card title="Welcome to the Dashboard!" className="w-25rem">
           <p>You are now logged in.</p>
         </Card>
    </div>
    </>
  
  );

};

export default Dashboard;


