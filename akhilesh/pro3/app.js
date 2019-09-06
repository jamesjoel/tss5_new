var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";




app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());




app.get("/", function(req, res){
    var obj={pagename : "index", title : "Home Page"};
    res.render("layout", obj);
});
app.get("/about", function (req, res) {
    var obj={pagename : "about", title : "About Page"};
    res.render("layout", obj);
});
app.get("/contact", function (req, res) {
    var obj={pagename : "contact", title : "Contact Page"};    
    res.render("layout", obj);
});


app.post("/teacher/save", function(req, res){
    MongoClient.connect(dbUrl, function(err, result){
        var db = result.db("tss5");
        db.collection("teacher").insert(req.body, function(err, result){
            res.redirect("/teacher");
        });
    });
});





app.get("/teacher", function(req, res){
    MongoClient.connect(dbUrl, function(err, result){
        var db = result.db("tss5");
        db.collection("teacher").find().toArray(function(err, result){
            // console.log(result);
            var obj = { pagename: "teacher", title: "Teacher Page", result : result };
            res.render("layout", obj);
        });
    });

    
});
app.get("/add_teacher", function (req, res) {
    var obj = { pagename: "add_teacher", title: "Teacher Add Page" };
    res.render("layout", obj);
});

app.get("/help", function (req, res) {
    var obj = { pagename: "help", title: "Help Page" };
    res.render("layout", obj);
});



app.listen(3000, function(){
    console.log("server running");
});