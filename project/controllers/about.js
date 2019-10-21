var express = require("express");
var routes = express.Router();
var Product = require("../models/product");





routes.get("/", function(req, res){
    // Product.addNewField(function(err, result){
    //     console.log(result);
    // });
    Product.lookup(function(err, result){
        console.log(result);
    });
    //var pagedata = { title: "About", pagename: "about/index" };
    //res.render("layout", pagedata);
});

module.exports=routes;