var express = require("express");
var app =express();
var cors=require("cors");
var bodyParser=require("body-parser");
var jwt=require("jsonwebtoken");
var MongoClient=require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017";



app.use(cors());
app.use(bodyParser());



app.get("/api/user",function(req,res){
    var data=[
        {
            name:"Rohit",
            age: 25,
            city: "indore"
        },
        {
            name:"Mayank",
            age: 22,
            city: "Bhopal"
        },
        {
            name:"Rahul",
            age: 24,
            city: "Dubai"
        },
        {
            name:"Sapan",
            age: 27,
            city: "Delhi"
        }
    ];

    res.json(data);
});



app.post("/user/auth",function(req,res){
    console.log(req.body);
    MongoClient.connect(dbUrl,function(err,client){
        var db=client.db("tss5");
        db.collection("angularuser").find({email: req.body.email}).toArray(function(err,result){
            if(result.length==1)
            {

                if(result[0].password==req.body.password)
                {
                    var token=jwt.sign({id: result[0]._id, name:result[0].full_name},"this is my secret key",{expiresIn:3600});
                    res.status(200).send({
                        success:true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success: false,
                        msg: "This password is incorrect."
                    });
                }

            }
            else
            {
                res.status(401).send({
                    success: false,
                    msg: "This Username and Password is incorrect."
                });
            }
        })
    });

});




var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.....")
});