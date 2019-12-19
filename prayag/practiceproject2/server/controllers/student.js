var express=require("express");
var routes=express.Router();
var Student=require("../Models/student");
var mongo=require("mongodb");


routes.get("/",function(req,res){
    Student.find({},function(err,result){
        res.send(result);
    });
});

routes.get("/:id",function(req,res){
    var id =req.params.id;
    Student.find({_id:mongo.ObjectId(id)},function(err,result){
        res.send(result[0]);
    });
});




module.exports=routes;