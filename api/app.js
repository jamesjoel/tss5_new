var express = require("express");
var app = express();
var mongo = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
app.use(bodyParser());



app.get("/api/student", function(req, res){
    MongoClient.connect("mongodb://localhost:27017", function(err, client){
        var db = client.db("tss5");
        db.collection("student").find().toArray(function(err, result){
            res.send(result);
        });
    });
});
app.get("/api/student/:id", function (req, res) {
    var id = req.params.id;
    // mongo.ObjectId.isValid(id);
    if (mongo.ObjectId.isValid(id)) 
    {
        var objId = mongo.ObjectId(id);
        MongoClient.connect("mongodb://localhost:27017", function (err, client) {
            var db = client.db("tss5");
            db.collection("student").find({ _id: objId }).toArray(function (err, result) {
                if (result.length==0) {
                    res.send("User Not Found");

                }

                else {
                    res.send(result);
                }
            });
        });    
    }
    else {

        res.send("User Not Found");
    }
    

    
    
});




app.post("/api/student", function(req, res){
    // if(req.body.name && req.body.age && req.body.city)
    // {
    //     var obj ={
    //         name : req.body.name,
    //         age : req.body.age,
    //         city : req.body.city
    //     }
    // }
    // else{

    // }




    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").insert(obj, function(err, result){
            res.send("Data Saved");
        });
    });
});
app.delete("/api/student/:id", function(req, res){
    var id = req.params.id;
    
    var objId = mongo.ObjectId(id);

    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").remove({ _id : objId}, function (err, result) {
            res.send("Data Deleted");
        });
    });
});


app.put("/api/student/:id", function(req, res){
    var id = req.params.id;
    var objId = mongo.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("tss5");
        db.collection("student").update({ _id: objId }, {$set : req.body}, function (err, result) {
            res.send("Data Updated");
        });
    });
});






app.listen(3000, function(){
    console.log("server running");
});