// server/routes/cryptoRoutes.js

import express from 'express';
import Portfolio from '../models/Portfolio.js';

const router = express.Router();


// // Dummy user-specific crypto portfolio data
// const portfolios = {
//   nandini: {
//     username: 'nan',
//     totalCryptoValue: 157000,
//     coins: [
//       { name: 'Bitcoin', symbol: 'BTC', quantity: 0.1, price: 3000000 },
//       { name: 'Ethereum', symbol: 'ETH', quantity: 1.5, price: 180000 },
//       { name: 'Polygon', symbol: 'MATIC', quantity: 500, price: 55 }
//     ]
//   },
//   vicky: {
//     username: 'vicky',
//     totalCryptoValue: 50000,
//     coins: [
//       { name: 'Dogecoin', symbol: 'DOGE', quantity: 1000, price: 5 },
//       { name: 'Solana', symbol: 'SOL', quantity: 10, price: 2000 }
//     ]
//   },

//   admin: {
//     username: 'admin',
//     totalCryptoValue: 50000,
//     coins: [
//       { name: 'Dogecoin', symbol: 'DOGE', quantity: 1000, price: 5 },
//       { name: 'Solana', symbol: 'SOL', quantity: 10, price: 2000 }
//     ]
//   }
// };

// Route: GET /api/crypto/:username
router.get('/:username', );

const getUser =()=> async (req, res) => {
  const username = req.params.username;
  
try {
    const portfolio = await Portfolio.findOne({username});
   

  if (!portfolio) {
    return res.status(404).json({ message: 'Portfolio not found for user' });
  }

  res.json(portfolio);
}

catch (err) {
    console.error('Portfolio fetch error:', err.message);
    res.status(500).json({ message: 'Error fetching portfolio', error: err.message });
  }


}

export default router;
