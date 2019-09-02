var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(express.static(__dirname+"/public"));
app.use(bodyParser());




app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.post("/save", function(req, res){

    var a = req.body.f_name;
    var b = req.body.email;
    var c = req.body.add;
    console.log(req.body);
    // save data into DB
    res.redirect("/about");

});

app.get("/about", function(req, res){
    res.render("about");
});



app.listen(3000, function(){
    console.log("server running");
});