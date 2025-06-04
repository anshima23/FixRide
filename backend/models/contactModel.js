const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  vehicle: { type: String, required: true },
  serviceDetails: { type: String, required: true },
  issue: { type: String, required: true },
  additionalInfo: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
