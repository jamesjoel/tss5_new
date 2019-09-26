var express=require("express")
var routes=express.Router()
var Category=require("../../models/category")
var Product=require("../../models/product")



routes.get("/add",function(req,res){
    Category.find({},function(err,result){

        var pagedata={pagename:"product/add",result:result}
        res.render("admin/layout",pagedata)
    })
})

routes.post("/add",function(req,res){
    req.body.price=parseInt(req.body.price)
    req.body.discount=parseInt(req.body.discount)
    Product.insert(req.body,function(err,result){
        res.redirect("/admin/product/")
    })
})


routes.get("/",function(req,res){
    Product.find({},function(err,result){
        var pagedata={pagename:"product/index",result:result}
        res.render("admin/layout",pagedata)
    })
})







module.exports=routes;