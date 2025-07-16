// routes/auth.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Register endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful', user: { username } });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user: { username } });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
});

export default router;
