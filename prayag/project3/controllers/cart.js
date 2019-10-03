var express=require("express")
var routes=express.Router()


routes.get("/",function(req,res){

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








