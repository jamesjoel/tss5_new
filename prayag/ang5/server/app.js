var express =require("express");
var app = express();
var cors=require("cors");


app.use(cors());


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
        },
        {
            name:"ram",
            age: 25,
            city: "chennai"
        }
    ]
    res.json(data);
});


 



var port =process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server is running....");
});