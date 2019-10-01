var express=require("express")
var routes=express.Router()
var Category=require("../../models/category")
var Product=require("../../models/product")


var mongo=require("mongodb")



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


routes.get("/delete",function(req,res){
    var where={_id:mongo.ObjectId(req.query.id)}
    // console.log(req.query)
    Product.delete(where,function(err,result){
        res.redirect("/admin/product/")
    })
})

routes.get("/edit",function(req,res){
    var where={_id:mongo.ObjectId(req.query.id)}
    Product.find(where,function(err,result1){
        Category.find({},function(err,result2){
            var pagedata={pagename:"product/edit",product:result1[0],category:result2}
            res.render("admin/layout",pagedata)
        })
    })
})


routes.post("/edit",function(req,res){
    console.log(req.body)
    var where={_id:mongo.ObjectId(req.body.id)}
    Product.update(where,req.body,function(err,result){
        res.redirect("/admin/product")
    })
})





module.exports=routes;