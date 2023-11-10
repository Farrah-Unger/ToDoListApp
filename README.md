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


