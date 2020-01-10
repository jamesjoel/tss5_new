var express=require("express");
var routes=express.Router();
var User=require("../Models/users");
var sha1=require("sha1");


routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password);
    console.log(req.body);
    User.Insert(req.body,function(err,result){
       console.log(result.ops[0]); 
       res.send({
           result:result.ops[0],
           msg:"Registration successful"
       });
    });

});


module.exports=routes;