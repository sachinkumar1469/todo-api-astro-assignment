const jwt = require('jsonwebtoken');
const HttpError = require('../config/HttpError');
const env = require('../config/environment');


// This middleware is used to check if the user is authenticated or not
// If the user is authenticated, then the user object is added to the request object
const checkAuthentication = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
        let error = new HttpError('Authentication failed', 401);
        return next(error);
    }
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        console.log(decoded," ",Date.now());
        req.user = decoded.user;
        next();
    } catch (err) {
        let error = new HttpError('Authentication failed', 401);
        return next(error);
    }
};

module.exports = checkAuthentication;