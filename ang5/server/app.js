var express = require("express");
var app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/api/student", function(req, res){
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "jaya",
            age : 30,
            city : "ujjain"
        }
    ]

    // res.send(JSON.stringify(data));
    res.json(data);
});



app.listen(3000, function(){
    console.log("server running");
});