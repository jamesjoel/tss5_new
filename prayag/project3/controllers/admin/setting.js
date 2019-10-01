var express=require("express")
var routes=express.Router()
var Admin=require("../../models/admin")
var sha1=require("sha1")

var mongo=require("mongodb")


routes.get("/",function(req,res){
    Admin.find({},function(err,result){
        console.log(result)

        var pagedata={pagename:"setting/index",result:result[0]}
        res.render("admin/layout",pagedata)
    })
})

routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password)
    console.log(req.body)
    var where={_id:mongo.ObjectId(req.body.id)}
    Admin.update(where,req.body,function(err,result){
        res.redirect("/admin")
    })
})






module.exports=routes;