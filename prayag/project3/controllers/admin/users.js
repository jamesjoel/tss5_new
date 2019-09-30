var express=require("express")
var routes=express.Router()
var mongo=require("mongodb")
var User=require("../../models/user")


routes.get("/",function(req,res){
    User.find({},function(err,result){
        var pagedata={pagename:"users/index",result:result}
        res.render("admin/layout",pagedata)
    })
})

routes.get("/change",function(req,res){
    console.log(req.query)
    var where={_id:mongo.ObjectId(req.query.id)}
    if(req.query.status==1){
        var obj={status:0}
    }else{
        var obj={status:1}
    }
    User.update(where,obj,function(err,result){
        res.redirect("/admin/users")
    })
})




module.exports=routes;