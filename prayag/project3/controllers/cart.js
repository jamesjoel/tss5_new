var express=require("express")
var routes=express.Router()
var mongo=require("mongodb")
var Product=require("../models/product")


routes.get("/",function(req,res){
    var ids=req.cookies.cartItem
    var arr=ids.split("#")
    var where_arr=[]
    arr.forEach(function(x){
        var obj={_id :mongo.ObjectId(x)}
        where_arr.push(obj)
    })

    Product.find({$or:where_arr},function(err,result){
        console.log(result)
        var pagedata={title:"My Cart",pagename:"cart/index",result:result}
        res.render("layout",pagedata)

    })
})

routes.get("/delete_item/:id",function(req,res){
    console.log(req.params)
    var where={_id:mongo.ObjectId(req.params.id)}
    Product.delete(where,function(err,result){
        res.redirect("/cart")
    })
})

routes.get("/clearcart",function(req,res){
    res.clearCookie("cartItem")
    res.redirect("/")
})





routes.get("/add/:id",function(req,res){
    // console.log(req.params)
    var id =req.params.id

    if("cartItem" in req.cookies)
    {
        var oldId=req.cookies.cartItem
        var newIds=id+"#"+oldId
        res.cookie("cartItem",newIds,{expire:360000+Date.now()})

    }
    else{
        res.cookie("cartItem",id,{expire:360000+Date.now()})

    }

    res.redirect("/")
})


module.exports=routes;








