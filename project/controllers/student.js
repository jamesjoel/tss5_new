var express = require("express");
var routes = express.Router();
var Student = require("../models/student");
// var Teacher = require("../models/teacher");





routes.get("/", function(req, res){
    Student.find(function(err, result){
        var pagedata = { title : "Student", pagename : "student/index", result : result};
        res.render("layout", pagedata);

    });
});




module.exports=routes;