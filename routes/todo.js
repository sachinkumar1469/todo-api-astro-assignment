const router = require('express').Router();

// Local imports
const checkAuthentication = require('../middleware/authentication');

// Controllers
const { getTodos, createTodo, updateTodo, deleteTodo, changeStatus } = require('../controllers/todo');

// Routes

// Get all todos of a user. This route is protected.
router.get("/all", checkAuthentication, getTodos);

// Create a new todo. This route is protected.
router.post("/create", checkAuthentication, createTodo);

// Update a todo. This route is protected.
router.put("/update/:id", checkAuthentication, updateTodo);

// Change status of a todo. This route is protected.
router.put("/change-status/:id", checkAuthentication, changeStatus);

// Delete a todo. This route is protected.
router.delete("/delete/:id", checkAuthentication, deleteTodo);

module.exports = router;