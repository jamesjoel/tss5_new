var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));


app.get("/", function(req, res){
    var data=["indore", "ujjain", "bhopal", "mumbai", "pune"];

    var pagedata = { username : "Rohit", city : data };
    res.render("home", pagedata);
});

app.get("/about", function(req, res){
    var data=[
        {
            name : "rohit",
            city : "indore",
            age : 25
        },
        {
            name: "james",
            city: "ujjain",
            age: 26
        },
        {
            name: "jaya",
            city: "mumbai",
            age: 28
        },
        {
            name: "gaurav",
            city: "indore",
            age: 22
        },
        {
            name: "nidhi",
            city: "bhopal",
            age: 25
        },
        {
            name : "prayag",
            city : "indore",
            age : 25
        }
    ];

    var pagedata = { userdata : data };





    res.render("about", pagedata);
});



app.listen(3000, function(){
    console.log("server running");
});