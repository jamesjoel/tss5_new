var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var upload=require("express-fileupload");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");


// app.use(cors());
app.use(bodyParser());
app.use(upload());
app.use(express.static(__dirname+"/public/"));
var uploadPath=__dirname + "/public/assets/" ;

app.post("/api/fileupload",function(req,res){
    var file=req.files.image;
    // console.log(file);
    // console.log(uploadPath);
    file.mv(uploadPath+file.name,function(err){
        console.log("file upload successful.");
            res.send({
                fileUrl:"http://localhost:3000/assets/" + file.name,
                // fileUrl:"/assets/" + file.name,
                msg:"File Upload Successfull."
            });
    });
}); 

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/public/index.html")
// });




var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.........");
}); 