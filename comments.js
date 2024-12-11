// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Use body parser
app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('Now listening for requests');
});