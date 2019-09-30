var express = require("express");
var routes = express.Router();
var Category = require("../../models/category");
var Product = require("../../models/product");
var mongo = require("mongodb");
var changeName = require("../../helpers/changename");
var path = require("path");

routes.get("/", function (req, res) {
    Product.find({}, function (err, result) {
        var pagedata = { pagename: "product/index", result: result };
        res.render("admin/layout", pagedata);
    });
});



routes.get("/add", function (req, res) {
    Category.find({}, function(err, result){

        var pagedata = { pagename: "product/add", result : result, msg : req.flash("msg") };
        res.render("admin/layout", pagedata);
    });
});
routes.post("/add", function (req, res) {
    // console.log(req.files);
    var image = req.files.image;
    var fileObj = changeName(image.name);
    if(fileObj.ext=="jpg" || fileObj.ext=="jpeg" || fileObj.ext=="png" || fileObj.ext=="gif")
    {
        if(image.size <= (1024*1024*2))
        {
            var upload_path = path.resolve()+"/public/product_image/"+fileObj.name;
            
            req.body.image=fileObj.name;
            req.body.price = parseInt(req.body.price);
            req.body.discount = parseInt(req.body.discount);
            image.mv(upload_path, function(err){
                Product.insert(req.body, function (err, result) {
                    res.redirect("/admin/product/");
    
                });
            });

        }
        else
        {
            req.flash("msg", "This File size is Too large");
            res.redirect("/admin/product/add"); 
        }
    }
    else
    {
        req.flash("msg", "This File Type not Allowed");
        res.redirect("/admin/product/add");
    }



    
});

routes.get("/delete", function(req, res){
    var where = { _id : mongo.ObjectId(req.query.id)};
    Product.delete(where, function(err, result){
        res.redirect("/admin/product");
    });
});

routes.get("/edit", function (req, res) {
    var where = { _id: mongo.ObjectId(req.query.id) };
    Product.find(where, function (err, result1) {
        Category.find({}, function (err, result2) {
        var pagedata = { pagename: "product/edit", product: result1[0], category : result2 };
        res.render("admin/layout", pagedata);
        });
    });
});
routes.post("/edit", function(req, res){
    var where = { _id : mongo.ObjectId(req.body.id)};
    Product.update(where, req.body, function(err, result){
        res.redirect("/admin/product");
    });
});



module.exports = routes;

