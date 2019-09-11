var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var dbUrl = "mongodb://localhost:27017";


app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());


app.get("/", function(req, res){
    var pagedata = { title : "Home", pagename : "home"};
    res.render("layout", pagedata);
});

app.get("/contact", function(req, res){
    var pagedata = { title : "Contact", pagename : "contect"};
    res.render("layout", pagedata);
});

app.get("/about", function (req, res) {
    var pagedata = { title: "About", pagename: "about" };
    res.render("layout", pagedata);
});

app.get("/add", function (req, res) {
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");

        db.collection("city").find().toArray(function(err, result){

            
            var pagedata = { title: "Add Employee", pagename: "add", result : result };
            res.render("layout", pagedata);
        });

    });
});

app.post("/add", function(req, res){
    req.body.salary = parseInt(req.body.salary);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("employee").insert(req.body, function(err, result){
            res.redirect("/add");
        });
    });


});



var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server Running");
});