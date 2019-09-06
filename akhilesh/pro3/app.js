var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

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

app.get("/help", function (req, res) {
    var obj = { pagename: "help", title: "Help Page" };
    res.render("layout", obj);
});



app.listen(3000, function(){
    console.log("server running");
});