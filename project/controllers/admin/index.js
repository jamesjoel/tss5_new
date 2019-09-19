var express = require("express");
var routes = express.Router();

routes.use("/", require("./login"));



module.exports=routes;