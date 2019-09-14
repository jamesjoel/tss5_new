var express = require("express");
var app = express();


app.set("view engine", "ejs");
// we have to set view engine for our app, 
// "view engine", "ejs"



app.use(express.static(__dirname+"/public"));


app.get("/", function(req, res){
    res.render("home");    
});




app.listen(3000, function(){
    console.log("server running");
});