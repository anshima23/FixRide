const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Required to fetch user details

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Get user excluding password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user; // Attach user to request
    next();
  } catch (err) {
    console.error('JWT verification error:', err.message);
    res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
