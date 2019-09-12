var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));
// the app.use() is every time before calling, when any URL call


app.get("/about", function(req, res){
   res.sendFile(__dirname+"/about.html");     
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");     
});
app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/help", function(req, res){
    res.sendFile(__dirname+"/help.html");
});



app.listen(3000, function(){
    console.log("server running");
});