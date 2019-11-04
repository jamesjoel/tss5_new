var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req, res){
    var pagedata = { title: "Signup" , pagename: "signup/index"};
    res.render("layout1",pagedata);
});

routes.post("/", function(req, res){
    req.body.password = sha1(req.body.password);
    req.body.status = 1;
    User.insert(req.body, function(err, result){
        res.redirect("/login");
    });
});

module.exports = routes;