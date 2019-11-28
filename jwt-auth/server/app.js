var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");

app.use(bodyParser());
app.use(cors());

app.post("/user/auth", function(req, res){
    if(req.body.email=="rohit@gmail.com")
    {
        if(req.body.password=="11")
        {
            var token = jwt.sign({ id: 5, name: "Rohit" }, "this is my private key", { expiresIn : 3600});
            res.status(200).send({
                success : true,
                token
            });
        }
        else
        {
            res.status(401).send({
                success: false,
                msg: "Password is Incorrect"
            });
        }
    }
    else
    {
        res.status(401).send({
            success : false,
            msg : "Username/Email is Incorrect"
        });
    }
})

app.get("/api/user", function(req, res){
    var data = [
        {
        name : "james",
        age : 25,
        city : "indore"
        },
        {
            name: "rohit",
            age: 20,
            city: "indore"
        },
        {
            name: "jaya",
            age: 30,
            city: "bhopal"
        },
        {
            name: "nilesh",
            age: 30,
            city: "indore"
        }
    ];
});


app.listen(3000, function(){
    console.log("server running");
});

