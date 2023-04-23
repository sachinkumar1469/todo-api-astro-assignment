const router = require('express').Router();

// Local imports
const checkAuthentication = require('../middleware/authentication');
const isAdmin = require('../middleware/isAdmin');

// Controllers
const { getAllUsers, getUser, deleteUser } = require("../controllers/admin");

// Routes

// Get all the users details. This route is protected and only accessible by admins.
router.get("/all", checkAuthentication, isAdmin,getAllUsers);

// Get the details of a particular user. This route is protected and only accessible by admins.
router.get("/:id", checkAuthentication, isAdmin,getUser);

// Delete a user. This route is protected and only accessible by admins.
router.delete("/:id", checkAuthentication, isAdmin,deleteUser);

module.exports = router;