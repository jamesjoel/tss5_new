var express = require("express");
var routes = express.Router();
var mongo = require("mongodb");
var Category = require("../../models/category");
var Product = require("../../models/product");


routes.get("/", function(req, res){
    Category.find({}, function(err, result){
        var pagedata = { pagename : "category/index", result : result};
        res.render("admin/layout", pagedata);
    });
});



routes.get("/add", function (req, res) {
    var pagedata = { pagename: "category/add", result : ""};
    res.render("admin/layout", pagedata);
});
routes.post("/add", function(req, res){
    Category.insert(req.body, function(err, result){
        res.redirect("/admin/category/");
    });
});

routes.get("/edit", function(req, res){
    var where = { _id : mongo.ObjectId(req.query.id)};
    Category.find(where, function(err, result){
        
        var pagedata = { pagename: "category/add", result : result[0] };
        res.render("admin/layout", pagedata);
    });
});
routes.post("/edit", function(req, res){
    console.log("***************",req.body);
    var where = { _id : mongo.ObjectId(req.body.id)};
    console.log("------------", where);
    Category.update(where, req.body, function(err, result){
        res.redirect("/admin/category");
    });
});


routes.get("/delete", function(req, res){
    var where = { _id : mongo.ObjectId(req.query.id)};
    Category.delete(where, function(err, result){
        Product.deleteMany({category : req.query.id}, function(err, result){

            res.redirect("/admin/category");
        });
    });
});



module.exports = routes;