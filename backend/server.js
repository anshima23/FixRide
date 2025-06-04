const app = require('./app');
const connectDB = require('./config/db'); // Import the DB connection

const PORT = process.env.PORT || 5000;

// MongoDB connection
connectDB(); // Connect to the database using the function from db.js

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
