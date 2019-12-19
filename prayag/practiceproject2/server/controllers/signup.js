var express=require("express");
var routes=express.Router();
var User=require("../Models/user");



routes.post("/",function(req,res){
    console.log(req.body);
    User.insert(req.body,function(err,result){
        res.send(result);
    });
});


module.exports=routes;