var express=require("express");
var routes=express.Router();

routes.get("/",function(req,res){
    console.log(req.userData);
});



module.exports=routes;