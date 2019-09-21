var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { title: "Signup", pagename: "signup/index" };
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    // console.log(sha1(req.body.password));
    req.body.password = sha1(req.body.password);
    
    User.insert(req.body, function(err, result){
        res.redirect("/login");
    });
});

module.exports = routes;