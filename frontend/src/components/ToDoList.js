import { React, useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import EditModal from "./EditModal";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks: ", error);
      });
  };

  const handleDeleteTask = (taskId) => {
    axios
      .delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        fetchTasks(); 
      })
      .catch((error) => {
        console.error("Error deleting task: ", error);
      });
  };

  const handleEditTask = (taskId, newTitle) => {
    const updatedTitle = newTitle
      ? newTitle
      : tasks.find((task) => task._id === taskId)?.title;

    axios
      .put(`http://localhost:5000/tasks/${taskId}`, { title: updatedTitle })
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? { ...task, title: updatedTitle } : task
          )
        );
      })
      .catch((error) => {
        console.error("Error editing task: ", error);
      });
  };

  const handleToggleComplete = (taskId, completed) => {
    axios
      .put(`http://localhost:5000/tasks/${taskId}`, { completed: !completed })
      .then(() => {
        fetchTasks();
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
      <div className="task-grid">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <div className="task">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleToggleComplete(task._id, task.completed)
                  }
                />
                <p>{task.title}</p>
              </div>
              <div className="button-container">
                <button
                  className="fancy-button"
                  onClick={() => {
                    setEditingTaskId(task._id);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="fancy-button"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
          setEditingTaskId(null);
        }}
        handleEditTask={(newTitle) => handleEditTask(editingTaskId, newTitle)}
      />
    </div>
  );
}
