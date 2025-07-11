// routes/stockRoutes.js
import express from 'express';
const router = express.Router();

let stocks = [
  {
    name: 'Vodafone Idea',
    Price: 7.2,
    change: 0.0,
    volume: 163748313,
    chartData: [7.0, 7.1, 7.2]
  },
  {
    name: 'Enviro Infra',
    Price: 277.99,
    change: 0.0,
    volume: 33963286,
    chartData: [270, 275, 277]
  }
];

// Function
const updatePrices = () => {
  stocks = stocks.map(stock => {
    const randomChange = (Math.random() * 2 - 1).toFixed(2);   // -1 to +1
    const newPrice = +(stock.price + +randomChange).toFixed(2);
    return {
      ...stock,
      price: newPrice,
      change: +randomChange,
      chartData: [...stock.chartData.slice(-5), newPrice]
    };
  });
};

setInterval(updatePrices, 5000); 

router.get('/', (req, res) => {
  res.json(stocks);
});

export default router;
