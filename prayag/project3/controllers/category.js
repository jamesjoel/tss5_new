var express=require("express")
var routes=express.Router()
var Category=require("../models/category")
var Product=require("../models/product")


routes.get("/:name",function(req,res){
    // console.log(req.params)
    Category.find({name:req.params.name},function(err,result1){
        console.log(result1)
        var _id=result1[0]._id
        _id=String(_id)
        Product.find({category:_id},function(err,result){
            // console.log(result)
            var pagedata={title:"Category:"+ req.params.name,pagename:"home/index",result:result}
            res.render("layout",pagedata)
        })
    })
})



module.exports=routes;