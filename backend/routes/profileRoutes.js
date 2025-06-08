const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// GET latest profile
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    const user = users[0];
    if (!user) {
      return res.status(404).json({ message: 'No profile found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
});

// POST update or create profile
router.post('/', async (req, res) => {
  const { name, phone, location, vehicle, age } = req.body;

  try {
    const users = await User.find().sort({ _id: -1 });
    const latestUser = users[0];

    if (latestUser) {
      latestUser.name = name;
      latestUser.phone = phone;
      latestUser.location = location;
      latestUser.vehicle = vehicle;
      latestUser.age = age;
      await latestUser.save();
      res.status(200).json(latestUser);
    } else {
      const newUser = new User({ name, phone, location, vehicle, age });
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).json({ message: 'Error saving profile', error: err.message });
  }
});

module.exports = router;
