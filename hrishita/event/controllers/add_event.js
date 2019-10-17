var express = require("express");
var routes = express.Router();
var Event = require("../models/event");

routes.get("/add", function(req, res){
    var n=req.query.n;
    var pagedata = {title:"Add Event", pagename:"add_event/index", n:n};
    res.render("layout2", pagedata);
}); 

routes.post("/add", function(req, res){
    Event.insert(req.body, function(err, result){
        res.redirect("/profile");
    })
})

module.exports=routes;