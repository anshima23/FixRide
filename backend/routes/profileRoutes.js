const express = require('express');
const User = require('../models/userModel');
const authenticate = require('../middlewares/authMiddleware'); // Import the authenticate middleware
const router = express.Router();

// Get profile data
router.get('/', authenticate, async (req, res) => {
  try {
    const user = await User.findOne(); // Assuming one user for simplicity
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
});

// Update profile data
router.post('/profile', authenticate, async (req, res) => {
  const { name, phone, location, vehicle, age } = req.body;
  
  try {
    const user = await User.findOne();
    if (user) {
      user.name = name;
      user.phone = phone;
      user.location = location;
      user.vehicle = vehicle;
      user.age = age;
      await user.save();
      res.status(200).json(user);
    } else {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

module.exports = router;
