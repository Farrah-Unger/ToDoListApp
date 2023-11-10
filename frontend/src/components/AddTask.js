import React, { useState } from 'react';

import axios from 'axios';

function AddTask({ refreshTasks }) {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleAddTask = () => {
    if (!title.trim()) {
      alert('Task title cannot be empty');
      return;
    }

    const newTask = { title, completed };
    axios.post('http://localhost:5000/tasks', newTask) 
      .then((response) => {
        refreshTasks();
      })
      .catch((error) => {
        console.error('Error adding task: ', error);
      });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>
      <form>
        <input
          type="text"
          placeholder="Enter a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;


