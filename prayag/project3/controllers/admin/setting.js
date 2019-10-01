var express=require("express")
var routes=express.Router()
var Admin=require("../../models/admin")
var sha1=require("sha1")

var mongo=require("mongodb")


routes.get("/",function(req,res){
    Admin.find({},function(err,result){
        console.log(result)

        var pagedata={pagename:"setting/index",result:result[0],msg:req.flash("msg")}
        res.render("admin/layout",pagedata)
    })
})

routes.post("/",function(req,res){
    req.body.password=sha1(req.body.password)
    req.body.current_password=sha1(req.body.current_password)
    console.log(req.body)
    var where={_id:mongo.ObjectId(req.body.id)}
    Admin.find({},function(err,result1){
        if(result1[0].password==req.body.current_password){

            Admin.update(where,req.body,function(err,result2){
                res.redirect("/admin")
            })
        }
        else{
            req.flash("msg","current password is incorrect!")
            res.redirect("/admin/setting/")
        }
    })
})






module.exports=routes;