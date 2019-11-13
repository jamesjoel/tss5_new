var express = require("express");
var app = express();


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

    res.send(data);
});



app.listen(3000, function(){
    console.log("server running");
});