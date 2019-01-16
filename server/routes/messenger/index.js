var express = require("express");
var index = express.Router();
var messenger = require("./messenger");

index.post("/", messenger);

module.exports = index;
