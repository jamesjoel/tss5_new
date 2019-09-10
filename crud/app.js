// calling express "public module"
var express = require("express");

// calling a express function and getting object return by express()
var app = express();

// require body-parser for getting HTML form/url data
var bodyParser = require("body-parser");

// require Mongodb and its MongoClient property
var MongoClient = require("mongodb").MongoClient;

// make Mongodb URL for connection
var dbUrl = "mongodb://localhost:27017";

// setting a view engine
app.set("view engine", "ejs");

// app.set("views", "pages");

// app.use() is a middleware which can run before any url function run
// make static file path to the public folder
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());



app.get("/", function(req, res){
    var pagedata = { title : "Home Page", pagename : "home"};
    res.render("layout", pagedata);
});
app.get("/student", function (req, res) {
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("student").find().toArray(function(err, result){
            
                var pagedata = { title: "Student Page", pagename: "student", result : result };
                res.render("layout", pagedata);

        });
    });
});



var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server running");
});