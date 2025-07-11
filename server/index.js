import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';
import cryptoRoutes from './routes/cryptoRoutes.js';
import stockRoutes from './routes/stockRoutes.js';








const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/crypto', cryptoRoutes);
app.use('/api/stocks', stockRoutes);


// mongoose.connect('mongodb://127.0.0.1:27017/groww-users', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://127.0.0.1:27017/groww-users');


app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend working!' });
});

// REGISTER
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ username, password });
  await user.save();
  res.json({ message: 'Registered successfully' });
});


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


// LOGIN
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful' });
});




app.listen(3001, () => console.log('Server running on http://localhost:3001'));
