var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var DBurl = "mongodb://localhost:27017";

var mongo = require("mongodb");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.get("/add_employee", function(req, res){
    res.render("add");
});
app.get("/", function(req, res){
        res.render("layout", { title : "Home"});
});
app.listen(3000, function(){
    console.log("server running");
});