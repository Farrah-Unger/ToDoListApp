const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db'); 
const taskRoutes = require('./taskRoutes'); 
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.use(taskRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
