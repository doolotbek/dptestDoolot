var express = require("express");
var router = express.Router();
var users = require("./users");
var message = require("./messages");



router.use("./user", users);
// router.use("./message" message);

module.exports = router;