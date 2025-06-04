const express = require('express');
const Contact = require('../models/contactModel');
const router = express.Router();

// ✅ No /contact here — this route handles POST /contact
router.post('/', async (req, res) => {
  const { name, phone, location, vehicle, serviceDetails, issue, additionalInfo } = req.body;

  try {
    const contact = new Contact({
      name,
      phone,
      location,
      vehicle,
      serviceDetails,
      issue,
      additionalInfo,
    });

    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting contact form' });
  }
});

module.exports = router;
