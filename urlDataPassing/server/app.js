var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

var MongoClient = require("mongodb").MongoClient;
var mongod = require("mongodb");
var dbUrl = "mongodb://localhost:27017";
app.use(bodyParser());
app.use(cors());


app.get("/api/user", function (req, res) {
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("student").find({}).toArray(function(err, result){
            res.send(result);
        });
    });
});
app.get("/api/user/:id", function (req, res) {
    var id = req.params.id;
    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db("tss5");
        db.collection("student").find({ _id : mongod.ObjectId(id)}).toArray(function (err, result) {
            res.send(result[0]);
        });
    });
});


app.listen(3000, function () {
    console.log("server running");
});

