import {React, useState, useEffect} from "react";
import axios from "axios";
import AddTask from "./AddTask";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/tasks') // Adjust the API endpoint
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });
  }

  const handleDeleteTask = (taskId) => {
    axios.delete(`http://localhost:5000/tasks/${taskId}`) // Adjust the API endpoint
      .then(() => {
        fetchTasks(); // Refresh the tasks list after deleting
      })
      .catch((error) => {
        console.error('Error deleting task: ', error);
      });
  };

  const handleEditTask = (taskId, newTitle) => {
    axios
      .put(`http://localhost:5000/tasks/${taskId}`, { title: newTitle }) // Adjust the API endpoint
      .then(() => {
        fetchTasks(); // Refresh the tasks list after editing
      })
      .catch((error) => {
        console.error("Error editing task: ", error);
      });
  };

  const handleToggleComplete = (taskId, completed) => {
    axios
      .put(`http://localhost:5000/tasks/${taskId}`, { completed: !completed }) // Adjust the API endpoint
      .then(() => {
        fetchTasks(); // Refresh the tasks list after toggling completion status
      })
      .catch((error) => {
        console.error("Error toggling completion status: ", error);
      });
  };



  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
    <AddTask refreshTasks={fetchTasks} />
    {/* Render your tasks list here */}
    {tasks.map((task) => (
      <div key={task._id}>
        <p>
          Title: {task.title}
          <button onClick={() => handleEditTask(task._id, prompt("Enter new title:"))}>
            Edit
          </button>
        </p>
        <p>
          Completed: {task.completed ? "Yes" : "No"}
          <button onClick={() => handleToggleComplete(task._id, task.completed)}>
            Toggle Complete
          </button>
        </p>
        <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
      </div>
    ))}
  </div>
  );
}