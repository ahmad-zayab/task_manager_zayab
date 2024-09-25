const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views')); // Specify the views directory
app.set('view engine', 'ejs'); // Set EJS as the view engine

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Usama@282930',
    database: 'taskdb'
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});
// Route for the home page
app.get('/', (req, res) => {
    res.render('home'); // Render the home view
});

// Routes

// Get all tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.render('index', { tasks: results });
    });
});

// Render form to create a new task
app.get('/tasks/new', (req, res) => {
    res.render('new');
});

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body; // Use status instead of deadline
    const sql = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
    db.query(sql, [title, description, status], (err, result) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

// Render form to edit a task
app.get('/tasks/edit/:id', (req, res) => {
    const taskId = req.params.id;
    db.query('SELECT * FROM tasks WHERE id = ?', [taskId], (err, result) => {
        if (err) throw err;
        res.render('edit', { task: result[0] });
    });
});

// Update a task
app.post('/tasks/update/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, description, status } = req.body; // Use status instead of deadline
    const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
    db.query(sql, [title, description, status, taskId], (err, result) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

// Delete a task
app.post('/tasks/delete/:id', (req, res) => {
    const taskId = req.params.id;
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [taskId], (err, result) => {
        if (err) throw err;
        res.redirect('/tasks');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});