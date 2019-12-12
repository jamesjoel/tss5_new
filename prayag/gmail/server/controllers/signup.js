var express=require("express");
var routes=express.Router();
var sha1=require("sha1");
var user=require("../models/user");


routes.post("/",function(req,res){
    var email=req.body.email;


    user.find({email:email},function(err,result){
        console.log(result);
        if(result.length==0)
        {
            // console.log(req.body);
            req.body.password=sha1(req.body.password);
            user.insert(req.body,function(err,result){
                // res.json(result.ops[0]);
                res.status(200).send({
                    success: true
                });
            });
        }
        else
        {
            res.status(401).send({
                success:false,
                msg:"This Username is Already taken.."
            });
        }
        // req.body.password=sha1(req.body.password);
        //     // console.log(req.body);
        //     user.insert(req.body,function(err,result){
        //         // res.json(result.ops[0]);
        //         res.status(200).send({
        //             success: true
        //         });
        //     });
    });
});




module.exports=routes;