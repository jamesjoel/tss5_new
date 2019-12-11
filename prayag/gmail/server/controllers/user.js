var express=require("express");
var routes=express.Router();


routes.get("/getuser",function(req,res){
    console.log(req.userData);
});





module.exports=routes;