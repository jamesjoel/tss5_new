var express=require("express");
var app = express();
var bodyParser=require("body-parser");
var MongoClient=require("mongodb").MongoClient;
var DBurl="mongodb://localhost:27017";

app.set('view engine','ejs');

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.get("/",function(req,res){
	var pagedata={title:"Home Page",pagename:"home"};
	res.render("layout",pagedata);
});

app.get("/add",function(req,res){
	MongoClient.connect(DBurl,function(err,client){
	var db=client.db("tss5");
	db.collection("city").find().toArray(function(err,result){
	var pagedata={title:"Add Page",pagename:"add",result:result};
	res.render("layout", pagedata);
	   });
   });
	
});

app.post("/add",function(req,res){
  
  req.body.age=parseInt(req.body.age);
  console.log(req.body);
  MongoClient.connect(DBurl,function(err,client){
  var db=client.db("tss5");
  db.collection("employee").insert(req.body,function(err,result){
  	res.redirect("/view");
     });
   });
});

app.get("/view",function(req,res){
	MongoClient.connect(DBurl,function(err,client){
	var db=client.db("tss5");
	db.collection("employee").find().toArray(function(err,result){
	var pagedata={title:"View Page",pagename:"view",result:result};
	res.render("layout",pagedata);	
	   });
	});
	
});


		




var port=process.env.PORT || 3000 ;

app.listen(port,function(){
	console.log("server is running...");
});