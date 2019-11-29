var express=require("express");
var routes=express.Router();
var student=require("../models/student");
var mongo=require("mongodb");


routes.get("/",function(req,res){
    student.find({},function(err,result){
        res.json(result);
    });
});

routes.post("/",function(req,res){
    // console.log(req.body)
    student.insert(req.body,function(err,result){
        res.json(result.ops[0]);
    });
});

routes.put("/",function(req,res){
     var id=req.query.id;
     delete req.body._id;
     var where={_id:mongo.ObjectId(id)};
     student.update(where,req.body,function(err,result){
        res.json(result);
     });
});

routes.delete("/",function(req,res){
    var id=req.query.id;
    var where={_id:mongo.ObjectId(id)};
    student.delete(where,function(err,result){
        res.json(result);
    });
});



module.exports=routes;