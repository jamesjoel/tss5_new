var express=require("express");
var routes=express.Router();
var User=require("../Models/users");
var sha1=require("sha1");
var jwt=require("jsonwebtoken");


routes.post("/",function(req,res){
    // console.log(req.body);
    var e=req.body.email;
    var p=sha1(req.body.password);

    User.Find({email:e},function(err,result){
        // console.log(result);
        if(result.length==1){
            if(result[0].password==p)
            {
                var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key",{expiresIn:360});
                res.status(200).send({
                    success:true,
                    token
                });
            }else{
                res.status(401).send({
                    success:false,
                    msg:"Password is Incorrect"
                });
            }
        }else{
            res.status(401).send({
                success:false,
                msg:"Email and Password is Incorrect"
            });
        }
    });

});




module.exports=routes;