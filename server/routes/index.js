var express = require("express");
var routes = express.Router();
var users = require("./users");
//var message = require("./messages");

routes.use("/users", users);
// router.use("./message" message);

module.exports = routes;