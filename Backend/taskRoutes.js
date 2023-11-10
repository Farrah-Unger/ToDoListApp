const express = require('express');
const Task = require('./models/task');

const router = express.Router();

// Get all tasks
router.get('/tasks', (req, res) => {
  Task.find()
  .then(tasks => {
      res.json(tasks);
  })
  .catch(err => {
      res.status(500).json({ error: 'Internal server error' });
  });
});

// Create a new task
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body); 
    const savedTask = await newTask.save(); 
    res.status(201).json(savedTask); 
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      console.error('Task with taskId already exists:', error.keyValue.taskId);
      res.status(400).json({ error: 'Task with taskId already exists' });
    } else {
      console.error('Error:', error); 
      res.status(500).json({ error: 'Internal server error' }); 
    }
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a task
router.delete('/tasks/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});


module.exports = router;
