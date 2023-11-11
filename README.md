# ToDoListApp

## Overview
The ToDo List App is a full-stack web application that allows users to manage their taksks. It provides features such as adding a new task, marking tasks as completed, editing task titles and deleting tasks. The application consists of both a frontend and a backend, interacting with a MongoDB database.

## Features

- Add a new task to the list
- Mark tasks as completed
- Edit tasks titles
- Delete tasks

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- State Management: useState (React)
- HTTP Requests: Axios
- Styling: CSS

### Prerequisites

- Node.js installed
- MongoDB installed and running
- MongoDB Atlas account (for remote database)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ToDoListApp.git

cd ToDoListApp/frontend
npm install
npm run start


# run the following commands in a seperate terminal:

cd ToDoListApp/backend
npm install
```
Create a .env file in the Backend directory and add the MongoDB connection URI
```
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name> with your MongoDB Atlas credentials`
```
npm run start
```
## Structure
```
📦 project-name
 ┣ 📂 Backend
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 db.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 task.js
 ┃ ┃ 📜 taskRoutes.js
 ┃ ┗ 📜 .env
 ┃ ┗ 📜 .gitignore
 ┣ 📂 frontend
 ┃ ┣ 📂 public
 ┃ ┃ ┣ 📜 index.html
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┗📜 AddTasks.js
 ┃ ┃ ┃ ┗📜 EditModal.js
 ┃ ┃ ┃ ┗📜 ToDoList.js
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┗ 📜 index.js
 ┃ ┗ 📜 package.json
 ┣ 📜 README.md
```
## Showcase

### Modal Editing

We've implemented a modal component for editing tasks, providing a smooth and distraction-free editing experience. Easily update task details with just a few clicks.

```const EditModal = ({ isOpen, closeModal, handleEditTask }) => {
  const [newTitle, setNewTitle] = useState('');

  const handleSave = () => {
    handleEditTask(newTitle);
    closeModal();
  };```