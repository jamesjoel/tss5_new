var express = require("express");
var routes = express.Router();
var Student = require("../models/student");


routes.get("/", function(req, res){
    Student.find_all(function(err, result){
        result = JSON.parse(JSON.stringify(result));
        
        var pagedata = { title : "Home", pagename : "home", result : result };
        res.render("layout", pagedata);
        
    });
});

routes.get("/delete/:id", function(req, res){
    var id = req.params.id;
    Student.delete(id, function(err, result){
        res.redirect('/');
    });
});
routes.post("/", function(req, res){
    Student.insert(req.body, function(err, result){
        res.redirect("/");
    });
});
routes.get("/edit/:id", function(req, res){
    var id = req.params.id;
    Student.find_by_id(id, function(err, result){
        result = JSON.parse(JSON.stringify(result));
        console.log(result);
        var pagedata = { title: "Home", pagename: "edit", result : result[0]};
        res.render("layout", pagedata);
    })
});

routes.post("/edit/:id", function(req, res){
    var id = req.params.id;
    Student.update(id, req.body, function(err, result){
        res.redirect("/");
    });
});

module.exports=routes;