var express=require("express")
var routes=express.Router()
var Category=require("../../models/category")


routes.get("/add",function(req,res){
    var pagedata={pagename:"category/add"}
    res.render("admin/layout",pagedata)
})

routes.post("/add",function(req,res){
    // console.log(req.body)
    Category.insert(req.body,function(err,result){
        res.redirect("/admin/category/")
    })
})

routes.get("/",function(req,res){
    Category.find({},function(err,result){
     var pagedata={pagename:"category/index",result:result}
     res.render("admin/layout",pagedata)

    })
})







module.exports=routes;