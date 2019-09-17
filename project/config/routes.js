var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/signup", require("../controllers/signup"));


module.exports=routes;