var express =require("express");
var app = express();


//  var bodyParser = require("body-parser");
//  var cookieParser = require("cookie-parser");
//  var session = require("express-session");
//  var flash = require("express-flash");
//  var nocache= require("nocache");
 
//  var sha1 = require("sha1");
//  var fileupload = require("express-fileupload");
 
 
 
//  var Category = require("./models/category");
 
 var routes = require("./config/routes");
 
 app.set("view engine", "ejs");
 app.use(express.static(__dirname+"/public"));
//  app.use(bodyParser());
//  app.use(cookieParser());
//  app.use(fileupload());
//  app.use(session({ secret : "TSS"}));
//  app.use(flash());
//  app.use(nocache());
  
 app.use(routes);

var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running");
})