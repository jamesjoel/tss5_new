var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
    res.send("<h1>Admin Login Page</h1>");
});


module.exports = routes;