// server/models/Portfolio.js

import mongoose from 'mongoose';

const CoinSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  quantity: Number,
  price: Number
});

const PortfolioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  totalCryptoValue: Number,
  coins: [CoinSchema]
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
export default Portfolio;