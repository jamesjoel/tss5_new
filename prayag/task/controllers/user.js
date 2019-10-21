var express=require("express")
var routes=express.Router()
var Event=require("../models/event")
var User=require("../models/user")
var mongo=require("mongodb")



routes.get("/",function(req,res){

    var where=mongo.ObjectId(req.session.uid)
    // User.find({_id:where},function(err,result1){
        // console.log(result1)
        Event.find({uid : where},function(err,result){
            console.log(result)
            var pagedata={title:"Profile Page",pagename:"user/index",result:result,result1:result1}
            res.render("layout",pagedata)

        })

    })

// })


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
    req.body.uid=mongo.ObjectId(req.body.uid)
    Event.insert(req.body,function(err,result){
        res.redirect("/user")
    })
})






module.exports=routes;

