var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var mongo = require("mongodb");
var upload = require("express-fileupload");


app.use(cors());
app.use(bodyParser());
app.use(upload());

app.use(express.static(__dirname+"/public"));

var uploadPath = __dirname+"/public/assets/";


app.post("/api/user/upload", function(req, res){
    var image = req.files.image;
    image.mv(uploadPath+image.name, function(err){
        var path = "http://localhost:3000/assets/"+image.name;
        res.send({ path : path });
    });
});





app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/index.html");
});



app.listen(3000, function () {
    console.log("server running");
});