// Local imports
const HttpError = require('../config/HttpError');
const env = require('../config/environment');

// Models
const Todo = require('../models/todo');

// Todo Controllers
exports.getTodos = async (req, res, next) => {
    try{
        const todos = await Todo.find({ user: req.user.id });
        return res.json(todos);
    }catch(err){
        console.log("Error in getting all todos",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// To create a new todo.
exports.createTodo = async (req, res, next) => {
    const { title, description } = req.body;
    try{
        // Create a new todo in database
        const todo = new Todo({
            title,
            description,
            user: req.user.id,
            status: "pending"
        });
        await todo.save();
        return res.json(todo);

    }catch(err){
        console.log("Error in creating todo",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// To update a todo.
exports.updateTodo = async (req, res, next) => {
    const { title, description, status } = req.body;
    try{
        // Check if todo exists in database
        const todo = await Todo.findOne({ _id: req.params.id, user: req.user.id });
        if(!todo){
            let httpError = new HttpError('Todo not found',404);
            return next(httpError);
        }
        // If todo exists, update it.
        todo.title = title;
        todo.description = description;
        todo.status = status;
        await todo.save();
        return res.json(todo);
    }catch(err){
        console.log("Error in updating todo",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// Change Status of a todo.
exports.changeStatus = async (req, res, next) => {
    const { status } = req.body;
    try{
        await Todo.findOneAndUpdate({ _id: req.params.id, user: req.user.id }, { status: status }, { new: true })
        return res.json({ message: "Status changed successfully" });
    }catch(err){
        console.log("Error in changing status of todo",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// To delete a todo.
exports.deleteTodo = async (req, res, next) => {
    try{
        // Check if todo exists in database
        await Todo.deleteOne({ _id: req.params.id, user: req.user.id });
        return res.json({ message: "Todo deleted successfully" });
    }catch(err){
        console.log("Error in deleting todo",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
}