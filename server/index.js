import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';
import cryptoRoutes from './routes/cryptoRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import authRoutes from './routes/auth.js';









const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/crypto', cryptoRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/auth', authRoutes); 


// mongoose.connect('mongodb://127.0.0.1:27017/groww-users', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });





// mongoose.connect('mongodb://127.0.0.1:27017/groww-users');


mongoose.connect('mongodb://127.0.0.1:27017/groww-users' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB error:', err);
});






app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend working!' });
});




// // REGISTER
// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;
//   const existingUser = await User.findOne({ username });
//   if (existingUser) return res.status(400).json({ message: 'User already exists' });

//   const user = new User({ username, password });
//   await user.save();
//   res.json({ message: 'Registered successfully' });
// });




// const router = express.Router();


// // LOGIN
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user || user.password !== password) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }
//   res.json({ message: 'Login successful' });
// });



// export default router;




app.listen(3001, () => console.log('Server running on http://localhost:3001'));
