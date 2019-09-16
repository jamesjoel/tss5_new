var express=require("express");
var app=express();


app.set("view engine","ejs");


app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){
    var obj={name: "prayag", age: 25, city: "indore"};


    res.render("home",obj);

});


app.get("/about",function(req,res){
    res.render("about");
});

app.get("/contact",function(req,res){
    res.render("contact");
});




app.listen(3000, function(){
    console.log("server is running...");
});