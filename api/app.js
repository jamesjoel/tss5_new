var express = require("express");
var app = express();

app.get("/api/getdata", function(req, res){
    var arr = [
        {
            name : "rohit",
            age : 25
        },
        {
            name: "rohit",
            age: 25
        },
        {
            name: "rohit",
            age: 25
        },
        {
            name: "rohit",
            age: 25
        }
    ]
    res.send(arr);
});
app.listen(3000, function(){
    console.log("server running");
});