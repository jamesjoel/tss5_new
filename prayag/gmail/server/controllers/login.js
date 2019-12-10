var express=require("express");
var routes=express.Router();
var sha1=require("sha1");
var user=require("../models/user");
var jwt=require("jsonwebtoken");


routes.post("/",function(req,res){


    // console.log(req.body);
    var email=req.body.email;
    user.find({email:email},function(err,result){
        // console.log(result);
        if(result.length==1){
            res.status(200).send({
                 result
            });
        }else{
            res.status(401).send({
                success:false,
                msg:"This Username is Incorrect."
            });
        }
    });
});






module.exports=routes;