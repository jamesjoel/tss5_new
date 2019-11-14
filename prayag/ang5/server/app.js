var express =require("express");
var app = express();

app.get("/api/student",function(req,res){
    var data = [
        {
            name:"rohit",
            age:22,
            city:"indore"
        },
        {
            name: "Monika",
            age:23,
            city:"bhopal"
        }
    ]
    res.send(data);
});






var port =process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running....");
});