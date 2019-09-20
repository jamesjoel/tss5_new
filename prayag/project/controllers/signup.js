var express=require("express")
var routes=express.Router()


routes.get("/",function(req,res){
    var pagedata={title:"Signup Page",pagename:"signup/index"}
    res.render("layout",pagedata)
})

module.exports=routes;