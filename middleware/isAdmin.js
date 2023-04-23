// Local imports
const HttpError = require('../config/HttpError');
const env = require('../config/environment');

// This middleare is used to check if the user is an admin or not
// If the user is an admin, then the user object is added to the request object
// otherwise an error is thrown
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        let error = new HttpError('You are not authorized to access this route', 403);
        return next(error);
    }
    next();
};

module.exports = isAdmin;