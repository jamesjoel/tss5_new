var express=require("express");
var app =express();
var bodyParser=require("body-parser");
var cors=require("cors");
var routes=require("./config/routes");
var fileUpload=require("express-fileupload");

app.use(bodyParser());
app.use(fileUpload());
app.use(cors());


app.use(routes);


var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.................");
});