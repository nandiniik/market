import express from 'express';

const router = express.Router();

// Dummy crypto portfolio data
router.get('/', (req, res) => {
  res.json({
    username: 'nandini',
    totalCryptoValue: 157000,
    coins: [
      { name: 'Bitcoin', symbol: 'BTC', quantity: 0.1, price: 3000000 },
      { name: 'Ethereum', symbol: 'ETH', quantity: 1.5, price: 180000 },
      { name: 'Polygon', symbol: 'MATIC', quantity: 500, price: 55 }
    ]
  });
});

export default router;
