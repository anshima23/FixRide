const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const authenticate = require('../middlewares/authMiddleware');

// GET profile route
router.get('/', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user); // req.user is user id from token
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

// POST profile route to update user profile
router.post('/profile', authenticate, async (req, res) => {
  const { name, phone, location, vehicle, age } = req.body;

  try {
    let user = await User.findById(req.user);
    if (user) {
      user.name = name;
      user.phone = phone;
      user.location = location;
      user.vehicle = vehicle;
      user.age = age;
      await user.save();
      return res.status(200).json(user);
    } else {
      // Create new user document with the authenticated user's ID
      user = new User({ _id: req.user, name, phone, location, vehicle, age });
      await user.save();
      return res.status(201).json(user);
    }
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
});

module.exports = router;
