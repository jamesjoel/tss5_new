var express = require("express");
var app = express();
// hello

app.set("view engine", "ejs");
// app.set("views", "pages");


app.use(express.static(__dirname+"/public"));


app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    var obj = { name : "rohit", city : "indore", age : 25};


    res.render("about", obj);
    
});
app.get("/contact", function (req, res) {
    res.render("contact");

});




// .listen() is crating a virtual server
// we have to set a port for our server
app.listen(3000, function(){ // this a callback function 
    console.log("Server Running");
});
// console.log("hello");
