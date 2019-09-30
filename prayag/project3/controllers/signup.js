var express=require("express")
var routes=express.Router()
var User=require("../models/user")
var sha1=require("sha1")



routes.get("/",function(req,res){
    var pagedata={title:"signup page",pagename:"signup/index"}
    res.render("layout",pagedata)
})

routes.post("/",function(req,res){

    req.body.password=sha1(req.body.password)
    req.body.status=1
    console.log(req.body)

    User.insert(req.body,function(err,result){
        res.redirect("/login")
    })

})





module.exports=routes;