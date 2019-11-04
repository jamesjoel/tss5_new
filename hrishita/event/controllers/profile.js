var express = require("express");
var routes = express.Router();
var Event = require("../models/event");

routes.get("/",function(req, res){
    Event.find({}, function(err, result){
        var pagedata = {title:"profile",pagename:"profile/index",result:result};
        res.render("layout2",pagedata);
    });
});

module.exports=routes;  