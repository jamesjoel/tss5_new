var express=require("express")
var routes=express.Router()
var Admin=require("../../models/admin")
var sha1=require("sha1")



routes.get("/",function(req,res){
    var pagedata={pagename:"login",msg:req.flash("msg")}

    res.render("admin/layout",pagedata)
})

routes.post("/",function(req,res){
    // console.log(req.body)
    var u=req.body.username
    var p=req.body.password


    Admin.find({username:u},function(err,result){
        if(result.length==0){
            req.flash("msg","Username and Password is Incorrect. !")
            res.redirect("/admin")
        }
        else{
            if(result[0].password==sha1(p)){
                req.session.is_admin_logged_in=true
                res.redirect("/admin/home")
            }
            else{
                req.flash("msg","Password Incorrect !")
                res.redirect("/admin")
            }
        }
    })


})




module.exports=routes;