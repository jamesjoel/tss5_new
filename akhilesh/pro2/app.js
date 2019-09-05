var express = require("express");
var app = express();


app.set("view engine", "ejs");




app.use(express.static(__dirname+"/public"));



app.get("/", function(req, res){
    var a = "Rohit";
    var b = 25;

    var obj={ name : a, age : b, city : "indore" };
    
    res.render("home", obj);
});

app.get("/list", function(req, res){
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name: "james",
            age: 25,
            city: "indore"
        },
        {
            name: "jaya",
            age: 25,
            city: "ujjain"
        },
        {
            name: "nidhi",
            age: 25,
            city: "bhopal"
        }
    ];
    
    var obj = { stu : data };

    res.render("list", obj);
});



 
app.listen(3000, function(){
    console.log("Server Running");
});