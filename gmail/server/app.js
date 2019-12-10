var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var MongoClient = require("mongodb").MongoClient;
var sha1 = require("sha1");

app.use(bodyParser());
app.use(cors());

app.post("/api/user/auth", function (req, res) {
    // if(req.body.username == "rohit@gmail.com")
    // {
    //     if(req.body.password){
    //         if(req.body.password == "11")
    //         {
    //             res.status(200).send({
    //                 success : true,

    //             });
    //         }
    //         else{
    //             res.status(401).send({
    //                 success: false,
    //                 msg: "This Password Incorrect"
    //             });
    //         }
    //     }
    //     else{
    //         res.status(200).send({
    //            fullname : "Rohit",
    //            imagepath : "./assets/avatar.png",
    //            username : "rohit@gmail.com"
    //         });
    //     }

    // }
    // else{
        
    //     res.status(401).send({
    //         success: false,
    //         msg: "This Username and Password Incorrect"
    //     });
    
    // }

    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("gmail");
        req.body.password = sha1(req.body.password);
        db.collection("user").find({ email: req.body.username }).toArray(function (err, result) {
            if (result.length == 1) {
                if(req.body.password){
                    if (result[0].password == sha1(req.body.password)) {
                        var token = jwt.sign({ id: result[0]._id, name: result[0].name }, "this is my secret key", { expiresIn: 3600 });
                        res.status(200).send({
                            success: true,
                            token
                        });
                    }
                    else {
                        res.status(401).send({
                            success: false,
                            msg: "This Password Incorrect"
                        });
                    }
                }
                else{
                    if(result[0].image==""){
                        var path = "./assets/avatar.png";
                    }
                    else{
                        path = "./assets/"+result[0].image;
                    }
                    res.status(200).send({
                        fullname: result[0].fullname,
                        imagepath : path,
                        username : result[0].username
                    });
                }
                
            }
            else {
                res.status(401).send({
                    success: false,
                    msg: "This Username and Password Incorrect"
                });
            }
        });
    });
});




app.post("/api/user/signup", function(req, res){
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        var db = client.db("gmail");
        db.collection("user").find({ username : req.body.username}).toArray(function (err, result) {
            if(result.length==0)
            {
                MongoClient.connect("mongodb://localhost:27017", function (err, client) {
                    var db = client.db("gmail");
                    req.body.password = sha1(req.body.password);
                    db.collection("user").insert(req.body, function (err, result) {
                        res.status(200).send({
                            success: true
                        });
                    });
                });
            }
            else{
                res.status(401).send({
                    success: false,
                    msg : "This Username is Already Taken.."
                }); 
            }

        });
    });
});



app.listen(3000, function () {
    console.log("server running");
});

