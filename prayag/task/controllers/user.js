var express=require("express")
var routes=express.Router()
var Event=require("../models/event")
var User=require("../models/user")



routes.get("/",function(req,res){
    Event.find({},function(err,result){
        var pagedata={title:"Profile Page",pagename:"user/index",result:result}
        res.render("layout",pagedata)

    })
})

routes.get("/event",function(req,res){
    var n=req.query.n
    // console.log(n)
    // User.find({},function(err,result){
    //     console.log(result)
        var pagedata={title:"Add Event",pagename:"user/event",n:n}
        res.render("layout",pagedata)

    // })
})
routes.post("/event",function(req,res){
    // console.log(req.body)
    Event.insert(req.body,function(err,result){
        res.redirect("/user")
    })
})






module.exports=routes;

