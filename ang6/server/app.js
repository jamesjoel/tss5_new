var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");


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

app.post("/api/student", function(req, res){
    // console.log(req.body);
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").insert(req.body, function(err, result){
            // console.log(result);
            res.json(result.ops[0]);
        });
    });
});

app.put("/api/student", function (req, res) {
    // var id = req.query.id;
    var id = req.body._id;
    
    
    delete req.body._id;
    
    // console.log(req.body);

    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").updateOne({ _id : mongo.ObjectId(id)}, { $set : req.body}, function(err, result){
            console.log("---------",err);
            res.json(result);
        });
    });
});

app.delete("/api/student", function(req, res){
    // console.log(req.query);
    var id = req.query.id;
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").remove({ _id: mongo.ObjectId(id) },function (err, result) {
            res.json(result);
        });
    });
});








app.listen(3000, function(){
    console.log("server running");
});