var express=require("express");
var app=express();
var bodyParser = require("body-parser");
var MongoClient=require("mongodb").MongoClient;
var url ="mongodb://localhost:27017";


app.set("view engine","ejs");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.get("/",function(req,res){
    MongoClient.connect(url,function(err,result){
        var db=result.db("tss5");
        db.collection("student").find().toArray(function(err,result){
            var obj={result:result};
            res.render("index",obj);
        });
    });

    
});

app.get("/add",function(req,res){
   res.render("add") ;
});

app.post("/save",function(req,res){
    MongoClient.connect(url,function(err,result){
       var db=result.db("tss5");
       db.collection("student").insert(req.body,function(err,result){
        res.redirect("/");
       }) ;
    });
    // console.log(req.body);  //shows the form value in console//
    
});


app.listen(3000,function(){
    console.log("server running..");
});