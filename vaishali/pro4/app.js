var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));


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


    


app.listen(3000, function(){
    console.log("server running");
});