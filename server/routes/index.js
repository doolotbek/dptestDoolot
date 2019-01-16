var express = require("express");
var routes = express.Router();
var users = require("./users");
var messenger = require("./messenger");


routes.use("/users", users);
routes.use("/messenger", messenger);

module.exports = routes;