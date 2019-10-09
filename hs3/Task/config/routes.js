var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
// routes.use("/cal", require("../controllers/cal"));


module.exports=routes;