# Task Manager

A simple web application that allows users to create, view, update, and delete tasks (CRUD operations) for task management. This project is built using **JavaScript** (Node.js) and **SQL** for data storage.

## Key Features

-   **Create**: Add new tasks to the task list.
-   **Read**: View the list of all tasks.
-   **Update**: Edit the details of existing tasks.
-   **Delete**: Remove tasks from the list.

## Technologies Used

-   **JavaScript** (Node.js) for server-side logic.
-   **SQL** (MySQL or Microsoft SQL Server) for database management.

## Project Setup

### 1. Clone the repository:

bash



`git clone https://github.com/yourusername/task-manager.git
cd task-manager` 

### 2. Install dependencies:

Make sure you have **Node.js** installed. Then, run:

bash



`npm install` 

### 3. Database Setup

-   Create a SQL database named `task_manager`.
-   You can use the following SQL query to create the `tasks` table:

sql



`CREATE DATABASE task_manager;

USE task_manager;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);` 

### 4. Configure the Database Connection:

In the `app.js` file, configure your database connection:

javascript



`const db = mysql.createConnection({
  host: 'localhost',       
  user: 'root',             
  password: 'your_password',
  database: 'task_manager'  
});` 

### 5. Run the Application:

Start the server using:

bash

Copy code

`node app.js` 

The server will run on `http://localhost:3001`.

### 6. Access the Frontend:

Open the `index.html` file located in the `frontend` folder in your browser to interact with the task manager.

## API Endpoints

-   **GET** `/tasks` - Retrieve all tasks.
-   **POST** `/tasks` - Create a new task.
-   **PUT** `/tasks/:id` - Update an existing task by ID.
-   **DELETE** `/tasks/:id` - Delete a task by ID.

## Contribution

Feel free to submit pull requests or create issues if you find any bugs or want to propose new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
