const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  vehicle: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);
