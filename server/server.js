const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
connectDB();

// test route
app.get('/', (req, res) => {
  res.send('Server running with MongoDB!');
});

// routes
const creatorRoutes = require('./routes/creatorRoutes');
app.use('/api/creators', creatorRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));

