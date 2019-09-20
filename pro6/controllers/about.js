var express = require("express");
var routes = express.Router();
var Teacher = require("../models/teacher");



routes.get("/", function(req, res){
    Teacher.select(function (err, result) {
        res.send(result);
    });

});
routes.get("/info", function (req, res) {
    res.send("<h1>Info Page</h1>");
});
module.exports=routes;
