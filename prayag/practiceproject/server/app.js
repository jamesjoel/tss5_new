var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var cors=require("cors");
var sha1=require("sha1");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";
var jwt=require("jsonwebtoken");


app.use(bodyParser());
app.use(cors());


app.post("/api/user",function(req,res){
    req.body.password=sha1(req.body.password);
    MongoClient.connect(dbUrl,function(err,client){
       var db=client.db("angularuser");
       db.collection("user").insert(req.body,function(err,result){
        res.json(result.ops[0]);
       });
    });
});

app.post("/api/user/auth",function(req,res){
    // console.log(req.body);
    var email=req.body.email;
    var password=sha1(req.body.password)
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("angularuser");
        db.collection("user").find({email:email}).toArray(function(err,result){
            // console.log(result)
            if(result.length==1){
                if(result[0].password==password)
                {
                    var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key",{expiresIn:100});
                    res.status(200).send({
                        success:true,
                        token
                    });
                }
                else{
                    res.status(401).send({
                        success:false,
                        msg:"Password is incorrect."
                    });
                }
            }
            else{
                res.status(401).send({
                    success:false,
                    msg:"Username and Password is incorrect."
                });
            }
        });
        
    });
});


app.get("/api/user",backdoor,function(req,res){
    console.log(req.userData);
});


function backdoor(req,res,next){
    if(!req.headers.authorization)
    {
        res.status(401).send({
           msg:"Unauthorized User" 
        });
    }
    else{
        if(req.headers.authorization="")
        {
            res.status(401).send({
               msg: "Unauthorized User" 
            });
        }
        else
        {
            var token=req.header.authorization;
            var payload=jwt.verify(token,"this is my secret key");
            if(!payload)
            {
                res.status(401).send({
                    msg: "Unauthorized User" 
                 });
            }
            else
            {
                req.userData=payload;
                next();
            }
        }
    }
}



var port=process.env.PORT || 3000;
app.listen(port,function(req,res){
    console.log("server is running.............");
});