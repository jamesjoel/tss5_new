var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var cors=require("cors");
var jwt=require("jsonwebtoken");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";


app.use(cors());
app.use(bodyParser());



app.get("/api/user/signup",function(req,res){
    
});






var port=process.env.PORT || 3000 ;
app.listen(port,function(){
    console.log("server is running........")
});