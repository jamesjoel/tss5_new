var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";
app.use(bodyParser());
app.use(cors());

app.post("/user/auth", function(req, res){
    console.log(req.body);
    MongoClient.connect(dbUrl, function(err, client){
        var db = client.db("tss5");
        db.collection("angularuser").find({ username : req.body.username }).toArray(function(err, result){
            if(result.length == 1)
            {
                if(result[0].password == req.body.password)
                {
                    var token = jwt.sign({ id : result[0]._id, name : result[0].full_name}, "this is my secret key", { expiresIn : 3600});
                    res.status(200).send({
                        success : true,
                        token
                    });
                }
                else
                {
                    res.status(401).send({
                        success: false,
                        msg: "This Password Incorrect"
                    });    
                }
            }
            else{
                res.status(401).send({
                    success : false,
                    msg : "This Username and Password Incorrect"
                });
            }
        });
    });
});

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

