const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://testing:techChallenge@localhost:27017/todolist';

mongoose.connect(mongoURI, {

});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;
