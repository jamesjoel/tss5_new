var express=require("express")
var routes=express.Router()
var Event=require("../models/event")



routes.get("/",function(req,res){
    var pagedata={title:"Profile Page",pagename:"user/index"}
    res.render("layout",pagedata)
})

routes.get("/event",function(req,res){
    var pagedata={title:"Add Event",pagename:"user/event"}
    res.render("layout",pagedata)
})
routes.post("/event",function(req,res){
    // console.log(req.body)
    Event.insert(req.body,function(err,result){
        res.redirect("/user")
    })
})






module.exports=routes;

