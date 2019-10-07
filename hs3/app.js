var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());


app.get("/",function(req,res){
    var pagedata={ title: "Home page title header", pagename:"hme"}
    res.render("layout",pagedata);
});
app.get("/Contact",function(req,res){
    var pagedata={ title: "Contact page title header", pagename:"CTC"}
    res.render("layout",pagedata);
});
app.get("/Add",function(req,res){
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");

        db.collection("city").find().toArray(function(err, result){
    var pagedata={ title: "Add page title header", pagename:"add",result:result};
    res.render("layout",pagedata);
    });
});
});

app.post("/add", function(req,res){
    //console.log(req.body)//
    req.body.salary = parseInt(req.body.salary);
    MongoClient.connect(dbUrl, function(err, client){
        var db=client.db("tss5");
        db.collection("employee").insert(req.body, function(err, result){
        res.redirect("/add");
        });
    });
});

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running");
});