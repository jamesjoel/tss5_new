var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var MongoClient=require("mongodb").MongoClient
var Dburl="mongodb://localhost:27017"

var mongo=require('mongodb')


app.set("view engine","ejs")
app.use(bodyParser())
app.use(express.static(__dirname+"/public"))





app.get("/",function(req,res){
    var pagedata={title:"Home Page",pagename:"home"}
    res.render("layout",pagedata)
})

app.get("/add",function(req,res){
    MongoClient.connect(Dburl,function(err,client){
        var db=client.db("tss5")
        db.collection("city").find().toArray(function(err,result){
            var pagedata={title:"Add Page",pagename:"add",result:result}
            res.render("layout",pagedata)
            
        })
    })
})

app.post("/add",function(req,res){
    console.log(req.body)
    req.body.age=parseInt(req.body.age)
    MongoClient.connect(Dburl,function(err,client){
      var db=client.db("tss5")
      db.collection("employee").insert(req.body,function(err,result){
        res.redirect("/employee")
      })  
    })

    
})


app.get("/employee",function(req,res){
    MongoClient.connect(Dburl,function(err,client){
        var db=client.db("tss5")
        db.collection("employee").find().toArray(function(err,result){
            var pagedata={title:"Employee Page",pagename:"employee",result:result}
            res.render("layout",pagedata)
        })
    })
})

app.get("/delete/:id",function(req,res){
    console.log("----------", req.params);
    MongoClient.connect(Dburl,function(err,client){
        var db=client.db("tss5")
        db.collection("employee").remove({_id:mongo.ObjectId(req.params.id)},function(err,result){
            res.redirect("/employee")
        })
    })
})





app.get("/employee",function(req,res){
    var pagedata={title:"Employee Page",pagename:"employee"}
    res.render("layout",pagedata)
})


var port=process.env.PORT || 3000

app.listen(port,function(){
    console.log('server is running...')
})
