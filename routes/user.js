const router = require('express').Router();

// Controllers
const { signin, signup } = require('../controllers/user');

// Routes

// Signin route
router.post("/signin", signin);

// Signup route
router.post("/signup", signup);


module.exports = router;