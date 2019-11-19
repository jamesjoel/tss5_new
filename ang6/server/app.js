var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;


app.use(cors());
app.use(bodyParser());

app.get("/api/student", function(req, res){
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
        var db= client.db("tss5");
        db.collection("student").find().toArray(function(err, result){
            res.json(result);
        });
    });
});


app.listen(3000, function(){
    console.log("server running");
});