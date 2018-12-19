var express = require("express");
var index = express.Router();
var register = require("./register");

index.post("/", register);

module.exports = index;