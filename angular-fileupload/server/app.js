var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var fileupload = require("express-fileupload");
var path = require("path");

app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cors());
app.use(fileupload());


app.post("/api/upload", function(req, res){
    // console.log(req.files);
    var image = req.files.image;
    // console.log(path.resolve());
    image.mv(__dirname+"/public/image/"+image.name, function(err){
        console.log(err);
        res.send({ name : image.name });
    });
});

app.listen(3000, function(){
    console.log('running');
});

