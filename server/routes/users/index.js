var express = require("express");
var router = express.Router();
var register = require("./register");
var login = require("./login");


router.use("/register", register);
router.use("/login", login);

module.exports = router;
