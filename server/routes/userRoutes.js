import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/all-users', async (req, res) => {
  try {
    // const users = await User.find();
       const users = await User.find({}, { password: 0 }); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

export default router;
