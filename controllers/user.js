const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Local imports
const HttpError = require('../config/HttpError');
const env = require('../config/environment');

// Models
const User = require('../models/user');

// Controllers

// Singin
exports.signin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        // Check if user exists in database
        const user = await User.findOne({ email });
        if(!user){
            let httpError = new HttpError('Invalid credentials',400);
            return next(httpError);
        }

        // If user exists, compare password with the hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            let httpError = new HttpError('Invalid credentials',400);
            return next(httpError);
        }

        // If password matches, send token in response
        const payload = {
            user: {
                id: user.id,
                name: user.name,
                role: user.role
            }
        };
        const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });

    }catch(err){
        console.log("Error in signin",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
};

// Signup
exports.signup = async (req, res, next) => {
    const { name, email, password, role } = req.body;
    try{
        // Check if user exists in database
        const user = await User.findOne({ email });
        if(user){
            let httpError = new HttpError('User already exists',400);
            return next(httpError);
        }

        // If user doesn't exist, create a new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });
        const savedUser = await newUser.save();
        const payload = {
            user: {
                id: savedUser.id,
                email: savedUser.email,
                role: savedUser.role
            }
        };
        // Send token in response
        const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });

    }catch(err){
        console.log("Error in signup",err);
        let httpError = new HttpError('Something went wrong',500);
        return next(httpError);
    }
    
}