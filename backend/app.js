require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/profile', require('./routes/profileRoutes')); // ✅ no auth required
app.use('/contact', require('./routes/contactRoutes'));
// Removed /auth route since not needed

module.exports = app;
