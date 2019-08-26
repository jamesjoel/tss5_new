var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
    
});
app.get("/user", function(req, res){
    res.sendFile(__dirname+"/user.html");
});
app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
});


// .listen() is crating a virtual server
// we have to set a port for our server
app.listen(3000, function(){ // this a callback function 
    console.log("Server Running");
});
// console.log("hello");
