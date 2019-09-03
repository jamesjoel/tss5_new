var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
/*
MongoClient.connect(url, function(err, result){
    if(err){
        console.log("Connection Error", err);
        
    }
    var db = result.db("tss5"); // use tss5
    // db.student.find()
    db.collection("student").find().toArray(function(err, result){
        if(err){
            console.log("Collection Error", err);
        }
        console.log(result);
    });


});*/















app.use(express.static(__dirname+"/public"));
app.use(bodyParser());




app.set("view engine", "ejs");

app.get("/", function(req, res){

    MongoClient.connect(url, function(err, result){
        var db = result.db("tss5");
        db.collection("student").find().toArray(function(err, result){

            var obj = { result : result };
            res.render("index", obj);

        });
    });







});
app.get("/add", function(req, res){
    res.render("add");
});




app.post("/save", function(req, res){
    
    MongoClient.connect(url, function(err, result){
        var db = result.db("tss5");
        db.collection("student").insert(req.body, function(err, result){
            res.redirect("/");
        });
    });
});



app.listen(3000, function(){
    console.log("server running");
});