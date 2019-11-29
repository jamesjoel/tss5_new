var express=require("express");
var routes=express.Router();
var user=require("../models/user");
var sha1=require("sha1");



routes.get("/",function(req,res){
    var pagedata={title:"signup page",pagename:"signup/index"};
    res.render("layout",pagedata)
});



routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password)
    // console.log(req.body)
    user.insert(req.body,function(err,result){
        res.redirect("/signup");
    });
});







module.exports=routes;