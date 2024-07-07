const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');
const path = require('path');
const app = express();
const multer = require('multer');
require('dotenv').config(); // Load environment variables

const db = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
