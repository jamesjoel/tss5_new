var express=require("express");
var routes=express.Router();
var user=require("../models/user");



routes.get("/",function(req,res){
    var pagedata={title:"signup page",pagename:"signup/index"};
    res.render("layout",pagedata)
});









module.exports=routes;