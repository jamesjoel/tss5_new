var express=require("express")
var routes=express.Router()
var Product=require("../models/product")


routes.get("/",function(req,res){
    // var pagedata={title:"about page",pagename:"about/index"}
    // res.render("layout",pagedata)




    // var where=[
    //     {
    //         $addFields:{"demo":"rohit"}
    //     }
    // ]


    // Product.addNewField(where,function(err,result){
    //     console.log(result)
    // })




    // var where=[
    //     {
    //         $lookup:{
    //             from:"category",
    //             localField:"category",
    //             foreignField:"_id",
    //             as:"cateData"
    //         }
    //     }
    // ]

    Product.lookup(function(err,result){
        console.log(result)
    })

})







module.exports=routes;