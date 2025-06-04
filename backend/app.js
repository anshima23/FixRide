require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/authRoutes')); 
app.use('/profile', require('./routes/profileRoutes'));
app.use('/contact', require('./routes/contactRoutes'));

module.exports = app;
