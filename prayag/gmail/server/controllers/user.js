var express=require("express");
var routes=express.Router();
var sha1=require("sha1");
var user=require("../models/user");



routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password);
    // console.log(req.body);
    user.insert(req.body,function(err,result){
        res.json(result.ops[0]);
    });
});







module.exports=routes;