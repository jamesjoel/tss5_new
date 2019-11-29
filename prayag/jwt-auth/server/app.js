var express = require("express");
var app =express();
var cors=require("cors");
var bodyParser=require("body-parser");
var jwt=require("jsonwebtoken");


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
    // console.log(req.body);
    if(req.body.email=="mayank@gmail.com")
    {
        if(req.body.password=="11")
        {
            var token=jwt.sign({id:2, name:"Mayank"},"this is my private key",{ expiresIn: 3600 });
            res.status(200).send({
                status:true,
                token
            });
        }
        else{
            res.status(401).send({
                status:false,
                msg: "Password is incoorect."
            });
        }
        
    }else{
        res.status(401).send({
            success: false,
            msg: "Username/Email is incorrect."
        });
    }
});




var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running.....")
});