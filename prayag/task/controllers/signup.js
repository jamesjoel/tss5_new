var express=require("express")
var routes=express.Router()
var User=require("../models/user")
var sha1=require("sha1")




routes.get("/",function(req,res){
    var pagedata={title:"signup Page",pagename:"signup/index" }
    res.render("layout",pagedata)
})


routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password)
    // console.log(req.body)

    User.insert(req.body,function(err,result){
        if(err){
            console.log("error in inserting data !!")
        }
        else{
            res.redirect("/")
        }
    })
})







module.exports=routes;