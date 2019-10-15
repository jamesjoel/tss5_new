var express = require("express");
var routes = express.Router();
var user = require("../models/user");


routes.get("/", function(req, res){
    user.find({}, function(err, result){

        var pagedata = { title : "Home", pagename : "home/index", result : result };
        res.render("layout", pagedata);
    })
});

module.exports=routes;