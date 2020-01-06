var express =require("express");
var app=express();
var bodyParser=require("body-parser");
var cors=require("cors");
var upload=require("express-fileupload");


app.use(cors());
app.use(bodyParser());
app.use(upload());

app.use(express.static(__dirname+"/public/"));
var uploadPath=__dirname+"/public/assets/";

app.post("/api/fileupload",function(req,res){
    var file=req.files.image;
    // console.log(file);
    file.mv(uploadPath+file.name,function(err){
        console.log("file upload successful.");
        res.send({
            fileUrl:"http://localhost:3000/assets/"+file.name,
            msg:"File upload successful."
        });
    });
});




var port =process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.....")
});