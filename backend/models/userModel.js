const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },      
  phone: { type: String },     
  location: { type: String },  
  vehicle: { type: String },   
  age: { type: Number },       
});

module.exports = mongoose.model('User', userSchema);
