var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var sha1=require("sha1");
var cookieParser=require("cookie-parser");
var session=require("express-session");
var flash=require("express-flash");
var cache=require("nocache");

var routes=require("./config/routes");




app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret:"PRP"}));
app.use(flash());
app.use(cache());

app.use(function(req,res,next){
    res.locals.session=req.session;
    next()
});


app.use(routes); 

var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.....");
});
