var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");

var random = require("randomstring");

app.use(bodyParser());
app.use(fileUpload());

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    // console.log(req.files.photo);
    var photo = req.files.photo;
    var arr = photo.name.split(".");
    var n = arr.length;
    var ext = arr[n-1];
    var rand = random.generate();
    var new_name = rand+"."+ext;
    var size = photo.size;

    if(ext == "jpg" || ext == "png" || ext == "gif" || ext == "jpeg")
    {
        if(size <= (1024*1024*2))
        {
            photo.mv(__dirname+"/public/image/"+new_name,function(err){

            });
        }
        else
        {
            console.log("size error");
            
        }
    }
    else
    {
        console.log("type error");
    }

    
});


app.listen(3000, function(){
    console.log("server running");
});