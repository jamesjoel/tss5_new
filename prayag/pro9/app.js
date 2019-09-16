var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var MongoClient=require("mongodb").MongoClient;
var DBurl="mongodb://localhost:27017";

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());




app.get("/",function(req,res){
    var pagedata={title:"home page",pagename:"home"};
    res.render("layout", pagedata);
});


app.get("/add",function(req,res){
    MongoClient.connect(DBurl,function(err,client){
        var db=client.db("tss5");
        db.collection("city").find().toArray(function(err,result){
            if(err)
               {
                  console.log(err);
              };
            var pagedata={title:"add",pagename:"add",result:result};

            res.render("layout", pagedata);
        });
    });

    
});

app.post("/add",function(req,res){
    req.body.salary=parseInt(req.body.salary);
MongoClient.connect(DBurl,function(err,client){
    var db=client.db("tss5");
    db.collection("employee").insert(req.body,function(err,result){
        res.redirect("/add");
    });
});

});


var port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log("server running...");
});

