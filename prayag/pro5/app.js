var express=require("express");
var app=express();

app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));


app.get("/",function(req,res){

    var data=["indore","ujjain","kasrawad","bhopal","bhind"];

    var pagedata={ useraname : "Prayag",city : data };
    
    res.render("home", pagedata);
});

app.get("/about", function(req,res){
    var data=[
        {
             name :"rohit",
             age : 24,
             city: "indore"            
        },
        {
            name :"Prayag",
            age : 25,
            city : "kasrawad"
        },
        {
            name :"shyam",
            age : 24,
            city : "khargone"
        },
        {
            name :"jagdish",
            age : 29,
            city : "khandwa"
        },
        {
            name :"raja",
            age : 15,
            city : "ranchi"
        }
    ];

    var pagedata={ userdata:data};

    res.render("about",pagedata)
});


app.listen(3000,function(){
    console.log("server running");
});