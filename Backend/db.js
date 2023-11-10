// const mongoose = require('mongoose');

// // MongoDB connection URI
// const mongoURI = 'mongodb://testing:techChallenge@localhost:27017/todolist';


// mongoose.connect(mongoURI, {

// });

// const db = mongoose.connection;


// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });


// module.exports = db;

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;

