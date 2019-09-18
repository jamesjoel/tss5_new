var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";


var bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());



app.get("/", function(req, res){
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss11");
        db.collection("student").find().toArray(function(err, result){
            console.log(result);
            var obj = {  result : result };
            res.render("home", obj);
        });
    });




});

app.get("/add", function(req, res){
    res.render("add");
});


app.post("/save", function(req, res){
    //console.log(req.body);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss11");
        db.collection("student").insert(req.body, function(err, result){
            res.redirect("/");
        });
    });
});



    


app.listen(3000, function(){
    console.log("server running");
});