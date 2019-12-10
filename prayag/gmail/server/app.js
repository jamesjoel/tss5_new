var express=require("express");
var app=express();
var cors=require("cors");
var bodyParser=require("body-parser");


var routes=require("./config/routes");



app.use(cors());
app.use(bodyParser());




app.use(routes);



var port=process.env.PORT || 3000;
app.listen(port,function(req,res){
    console.log("server is Running..........")
});

















