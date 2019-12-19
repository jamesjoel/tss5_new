var express=require("express");
var routes=express.Router();
var sha1=require("sha1");
var User=require("../Models/user");
var jwt=require("jsonwebtoken");



routes.post("/",function(req,res){
    var e=req.body.email;
    var p=req.body.password;
    User.find({email:e},function(err,result){
        // console.log(result);
        if(result.length==1)
        {
            if(result[0].password==req.body.password)
            {
                var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key",{expiresIn:3600});
                res.status(200).send({
                    success:true,
                    token
                });
            }else
            {
                res.status(401).send({
                    success:false,
                    msg:"This Password is Incorrect."
                });
            }
        }else{
            res.status(401).send({
                success:false,
                msg:"This Username and Password is Incorrect."
            });
        }
    });
});




module.exports=routes;