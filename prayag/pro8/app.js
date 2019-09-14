var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var MongoClient=require("mongodb");
var DBurl="mongodb://localhost:27017";

var mongo=require("mongodb");



app.set("view engine","ejs");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());


app.get("/",function(req,res){
    res.render("index");
});


app.get("/add",function(req,res){
    res.render("add");
});

app.post("/save",function(req,res){
    MongoClient.connect(DBurl,function(err,result){
        var db=result.db("tss5");
        db.collection("employee").insert(req.body,function(err,result){
            res.redirect("/employee");
        });
    });
});

// app.get("/save",function(req,res){
//     res.render("add");
// });


app.get("/employee",function(req,res){
    MongoClient.connect(DBurl,function(err,result){
        var db=result.db("tss5");
        db.collection("employee").find().toArray(function(err,result){
            var obj={result:result};
            res.render("employee",obj);
        });
    });


    
});







app.listen(3000,function(){
    console.log("server is running....");
});