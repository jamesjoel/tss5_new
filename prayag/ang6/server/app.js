var express =require("express");
var app =express();
var cors=require("cors");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";
var bodyParser=require("body-parser");

app.use(cors());
app.use(bodyParser());

app.get("/api/student",function(req,res){
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("tss5");
        db.collection("student").find().toArray(function(err,result){
            res.json(result);

        });
    });
});

app.post("/api/student",function(req,res){
    console.log(req.body);
})





var port=process.env.Port || 3000;
app.listen(port,function(){
    console.log("server is running...")
})