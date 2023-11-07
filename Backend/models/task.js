const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskId: {
    type: Number,
    unique: true,
  },
  title: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


