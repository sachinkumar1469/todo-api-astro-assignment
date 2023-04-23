const router = require('express').Router();

// todo routes
router.use("/todo", require("./todo"));

// user routes
router.use("/user", require("./user"));

// admin routes
router.use("/admin", require("./admin"));


module.exports = router;