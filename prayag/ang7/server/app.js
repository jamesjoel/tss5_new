var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var cors=require("cors");


var routes=require("./config/routes");

app.use(cors());
app.use(bodyParser());


app.use(routes);


var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running...");
});