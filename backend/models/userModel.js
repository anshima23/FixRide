const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  location: { type: String },
  vehicle: { type: String },
  age: { type: String },
});

module.exports = mongoose.model('User', userSchema);
