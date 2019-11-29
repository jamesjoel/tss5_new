var express=require("express");
var routes=express.Router();
var student=require("../models/student");
var mongo=require("mongodb");


routes.get("/",function(req,res){
    student.find({},function(err,result){
        res.json(result)
;    });
});

routes.post("/",function(req,res){
    student.insert(req.body,function(err,result){
        // console.log(result);
        res.json(result.ops[0]);
    });
});

routes.delete("/",function(req,res){
    var where={_id:mongo.ObjectId(req.query.id)};
    // console.log(where)
    student.delete(where,function(err,result){
        // console.log(result)
        res.json(result);
    });
});

routes.put("/",function(req,res){
   delete req.body._id;
   var where={_id:mongo.ObjectId(req.query.id)};
   student.update(where,req.body,function(err,result){
    res.json(result);
   }) ;
});










module.exports=routes;