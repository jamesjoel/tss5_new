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


var mongo = require("mongodb");

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

app.get("/add", function (req, res) {
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("city").find().toArray(function(err, result){
            var pagedata = { title: "Student Add", pagename: "add", result : result};
            res.render("layout", pagedata);

        });
    });




    
});


app.post("/add", function(req, res){

    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db('tss5');
        db.collection("student").insert(req.body, function(err, result){
            res.redirect("/student");
        });
    });
});

app.get("/delete/:id", function(req, res){
    console.log(req.params);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("student").remove({ _id : mongo.ObjectId(req.params.id)}, function(err, result){
            res.redirect("/student");
        });
    });
});

app.get("/edit/:id", function(req, res){
    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db("tss5");
        db.collection("city").find().toArray(function (err, result1) {

            db.collection("student").find({ _id : mongo.ObjectId(req.params.id)}).toArray(function(err, result2){
                var pagedata = { title: "Student Edit", pagename: "edit", result: result1, user:result2[0] };
                res.render("layout", pagedata);

            });
        });
    });
});

app.post("/edit", function(req, res){
    console.log(req.body);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("student").update({ _id : mongo.ObjectId(req.body.sid)}, { $set : req.body }, function(err, result){
            res.redirect("/student");
        });
    });


});






var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server running");
});