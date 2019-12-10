var express=require("express");
var app =express();
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";
var bodyParser=require("body-parser");
var cors=require("cors");
var jwt=require("jsonwebtoken");
var sha1=require("sha1");




app.use(cors());
app.use(bodyParser());

app.post("/api/user/auth",function(req,res){
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("tss5");
        req.body.password=sha1(req.body.password)
        db.collection("user").find({email:req.body.email}).toArray(function(err,result){
            if(result.length==1)
            {
                if(result[0].password==req.body.password)
                {
                    var token=jwt.sign({id:result[0]._id,name:result[0].name},"this is my secret key",{ expiresIn:3600 });
                    res.status(200).send({
                        success:true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success:false,
                        msg:"Password is incorrect"
                    });
                }

            }
            else
            {
                res.status(401).send({
                    success:false,
                    msg:"Username and password is incorrect"
                });
            }
        });
    });
});


app.get("/api/user/getuser",backdoor,function(req,res){
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
        if(req.headers.authorization=="")
        {
            res.status(401).send({
                msg:"Unauthorized User" 
            });
        }
        else{
            var token=req.headers.authorization;
            var payload=jwt.verify(token,"this is my secret key");
            if(!payload)
            {
                res.status(401).send({
                   msg:"Unauthorized User" 
                });
            }
            else{
                req.userData=payload;
                next();
            }
        }
    }
}




var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running....")
});
