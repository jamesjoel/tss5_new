var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var DBurl = "mongodb://localhost:27017";

var mongo = require("mongodb");







app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());




app.get("/", function(req, res){
    res.render("index");
});
app.get("/employee", function (req, res) {
    MongoClient.connect(DBurl, function(err, result){
        var db = result.db("tss5");
        db.collection("employee").find().toArray(function(err, result){
            var obj = { result : result };
            res.render("employee", obj);
        });
    });
});
app.get("/add_employee", function(req, res){
    res.render("add");

});
app.get("/employee/delete", function(req, res){
    console.log(req.query);
    var a = req.query.id;
    MongoClient.connect(DBurl, function(err, result){
        var db = result.db("tss5");
        db.collection("employee").remove({_id : mongo.ObjectId(a)}, function(err, result){
            res.redirect("/employee");
        });
    });
});
app.get("/employee/show", function(req, res){
    // var id = req.params.id;
    var id = req.query.id;
    MongoClient.connect(DBurl, function(err, result){
        var db = result.db("tss5");
        db.collection("employee").find({_id : mongo.ObjectId(id)}).toArray(function(err, result){
            
            res.render("show", { result : result[0]});
        });
    });
});




// app.get("/demo", function(req, res){
//     console.log(req.query);
// });

app.get("/demo/:name/:age/:city", function(req, res){
    console.log(req.params);
});


app.post("/add_employee", function(req, res){
    
    
    /*req.body.emp_salary = req.body.salary;
    delete req.body.salary;
    */

    /*var obj = {
        emp_name : req.body.name,
        emp_dep : req.body.dep,
        emp_salary : req.body.salary
    }*/

    req.body.salary = parseInt(req.body.salary);

    MongoClient.connect(DBurl, function(err, result){
        var db = result.db("tss5");
        db.collection("employee").insert(req.body, function(err, result){
            res.redirect("/employee");
        });
    });
});





app.listen(3000, function(){
    console.log("server running");
});