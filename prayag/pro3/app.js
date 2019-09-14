// var express=require("express");
// var app=express();

// app.listen(3000,function(){
//     console.log("server is running...")
// });




var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");

});
app.get("/user",function(req,res){
    res.sendfile(__dirname+"/user.html");
});
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
});




app.listen(3000,function(){
    console.log("server is running...")
});