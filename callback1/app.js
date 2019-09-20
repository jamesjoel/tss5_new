var express = require("express");
var app = express();
var routes = require("./config/routes");


app.use(routes);



app.listen(3000, function(){
    console.log("server running");
});