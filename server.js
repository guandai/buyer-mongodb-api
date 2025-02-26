// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5012;

connectDB(); // Connect to MongoDB

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes); // API routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
