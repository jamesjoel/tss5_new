var express=require("express");
var app=express();

app.set("view engine","ejs");


app.use(express.static(__dirname+"/public"));

app.get("/",function(req,res){

    var pagedata={pagename:"home",title:"Home page"};
    res.render("layout",pagedata);
});

app.get("/about",function(req,res){
   var pagedata ={pagename:"about",title:"About page"};
   res.render("layout",pagedata);
});

app.get("/contact",function(req,res){
    var pagedata={pagename:"contact",title:"Contact page"};
    res.render("layout",pagedata);
});

app.get("/terms",function(req,res){
    var pagedata={pagename:"terms",title:"Terms page"};
    res.render("layout",pagedata);
});

app.get("/login",function(req,res){
    var pagedata={pagename:"login",title:"Login page"};
    res.render("layout",pagedata);
});




app.listen(3000,function(){
    console.log("server running");
});