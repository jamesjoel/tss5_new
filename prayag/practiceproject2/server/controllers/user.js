var express=require("express");
var routes=express.Router();
var path=require("path");


routes.get("/getUser",function(req,res){
    var data=req.userData
    res.send({
        data
    })
});


routes.post("/upload",function(req,res){
    // console.log(req.files);
    var fileName=req.files.image;
    var myPath = path.resolve("") + "/public/images/" + fileName.name;
    // console.log(myPath);
    fileName.mv(myPath,function(err){
        console.log("file upload successfull.");
        res.send({fileUrl : "http:localhost:3000:/images/" + fileName.name});
        // res.send({fileUrl : "./assets/images/" + fileName.name});
    });
});



module.exports=routes;