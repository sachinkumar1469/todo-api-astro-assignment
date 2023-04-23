// Local imports
const HttpError = require('../config/HttpError');

// Models
const Todo = require("../models/todo");
const User = require("../models/user");

// Controllers

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try{
        // This will return all the users except the password field
        const users = await User.find({}).select('-password');
        return res.json(users);
    } catch(err){
        console.log("Error in getting all users",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// Get a particular user
exports.getUser = async (req, res, next) => {
    try{
        // Check if the user exists
        const user = await User.findById(req.params.id).select('-password');
        if(!user){
            let httpError = new HttpError('User not found',404);
            return next(httpError);
        }
        // If the user exists, then find all the todos for that user
        const todos = await Todo.find({user: req.params.id});
        return res.json({user, todos});

    } catch(err){
        console.log("Error in getting user details",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
}

// Delete a user
exports.deleteUser = async (req, res, next) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        // Check if the user exists
        if(!user){
            let httpError = new HttpError('User not found',404);
            return next(httpError);
        }
        // If the user exists, then delete the user and all the todos for that user
        await Todo.deleteMany({user: user._id});
        return res.json({msg: "User deleted successfully"});
    } catch(err){
        console.log("Error in deleting user",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};