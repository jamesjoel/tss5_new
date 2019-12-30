var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";
var sha1 = require("sha1");
app.use(bodyParser());
app.use(cors());

app.post("/api/user/auth", function (req, res) {

    MongoClient.connect(dbUrl, function (err, client) {
        var db = client.db("tss5");
        req.body.password = sha1(req.body.password);
        db.collection("user").find({ email: req.body.email }).toArray(function (err, result) {
            if (result.length == 1) {
                if (result[0].password == req.body.password) {
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
            else {
                res.status(401).send({
                    success: false,
                    msg: "This Username and Password Incorrect"
                });
            }
        });
    });
});
app.get("/api/user/getuser", backdoor, function(req, res){
    // console.log(req.userData);
    var id = req.userData.id;
    console.log("++++++++++++", id);

});



function backdoor(req, res, next){
    console.log("----------------",req.headers);
    if(! req.headers.authorization)
    {
        res.status(401).send({ msg : "Unathorized User"});
    }
    else{
        if(req.headers.authorization == "")
        {
            res.status(401).send({ msg : "Unathorized User"});
            
        }
        else{
            var token = req.headers.authorization;
            var payload = jwt.verify(token, "this is my secret key");
            if(! payload)
            {
                res.status(401).send({ msg : "Unathorized User"});

            }
            else{
                req.userData = payload;
                next();
            }
        }
    }
}




app.listen(3000, function () {
    console.log("server running");
});

