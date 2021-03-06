var express =require("express");
var app =express();
var cors=require("cors");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";
var bodyParser=require("body-parser");
var mongo=require("mongodb");


app.use(cors());
app.use(bodyParser());

app.use(express.static(__dirname+"/dist/ang6"));

app.get("/",function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname+"/dist/ang6/index.html");
});


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
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("tss5");
        db.collection("student").insert(req.body,function(err,result){
            console.log(result);
            res.json(result.ops[0]);
        });
    });
});

app.put("/api/student",function(req,res){
    var id=req.body._id;
    MongoClient.connect(dbUrl,function(err,client){
        var db =client.db("tss5");
        db.collection("student").update({_id:mongo.ObjectId(id)},{$set : req.body}, function(err,result){
            res.json(result);
        });
    });
});

app.delete("/api/student",function(req,res){
    var id=req.query.id;
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("tss5");
        db.colletion("student").remove({_id:mongo.ObjectId(id)},function(err,result){
            res.json(result);
        });
    });
});




var port=process.env.Port || 3000;
app.listen(port,function(){
    console.log("server is running...")
})