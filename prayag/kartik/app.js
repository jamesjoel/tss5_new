var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var cors=require("cors");
var jwt=require("jsonwebtoken");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";
var mongo=require("mongodb");


app.use(cors());
app.use(bodyParser());



app.post("/api/user/signup",function(req,res){
    console.log(req.body);
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("kartik");
        db.collection("user").insert(req.body,function(err,result){
            res.send(result);
        });
    });
});

app.post("/api/user/auth",function(req,res){
    // console.log(req.body);
    var e=req.body.email;
    var p=req.body.password;
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("kartik");
        db.collection("user").find({email:e}).toArray(function(err,result){
            // console.log(result);
            if(result.length==1)
            {
                if(result[0].password==p)
                {
                    var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key", {expiresIn:1000});
                    res.status(200).send({
                        success:true,
                        token
                    });
                }else{
                    res.status(401).send({
                        success:false,
                        msg:"This Password is Incorrect."
                    });
                }
            }else{
                res.status(401).send({
                    success:false,
                    msg:"This Username and Password is Incorrect."
                });
            }
        });
    });
});


app.get("/api/user/getuser",backdoor,function(req,res){
    console.log("......",req.userData);
    var id=mongo.ObjectId(req.userData.id);
    // console.log("id:",id);
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("kartik");
        db.collection("user").find({_id:id}).toArray(function(err,result){
            console.log(result);
            res.send({
                name:result[0].name,
                email:result[0].email
            });
        });
    });
});
  


function backdoor(req, res, next){
    // console.log("----------------",req.headers);
    if(! req.headers.authorization)
    {
        res.status(401).send({ 
            msg : "Unathorized User"
        });
    }
    else{
        if(req.headers.authorization == "")
        {
            res.status(401).send({
                 msg : "Unathorized User"
            });
            
        }
        else{
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if(! payload)
            {
                res.status(401).send({ 
                    msg : "Unathorized User"
                });

            }
            else{
                req.userData = payload;
                next();
            }
        }
    }
}





var port=process.env.PORT || 3000 ;
app.listen(port,function(){
    console.log("server is running........")
});