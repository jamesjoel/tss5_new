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
            if(req.body.password)
            {
                if(result[0].password==sha1(req.body.password))
                {
                    var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key",{expiresIn:200});
                    res.status(200).send({
                        success:true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success:false,
                        msg:"this Password is Incorrect"
                    });
                }
            }
            else
            {
                res.status(200).send({
                    name:result[0].name,
                    email:result[0].email
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