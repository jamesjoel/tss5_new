var express=require("express")
var routes=express.Router()
var student=require("../model/student")


routes.get("/",function(req,res){
    student.find(function(err,result){
        var pagedata={title:"Student Page",pagename:"student/index",result:result}
        res.render("layout",pagedata)

    })
})








module.exports=routes;