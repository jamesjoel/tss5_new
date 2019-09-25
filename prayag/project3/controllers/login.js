var express=require("express")
var routes=express.Router()
var User=require("../models/user")
var sha1=require("sha1")



routes.get("/",function(req,res){
    var pagedata={ title:"login page", pagename:"login/index",msg:req.flash("msg"),u:req.flash("u")}
    res.render("layout",pagedata)
})

routes.post("/",function(req,res){
    var e=req.body.email
    var p=req.body.password

    User.find({email:e},function(err,result){
        console.log(req.body)
        console.log(result)
        if(result.length==0){
            // console.log("this email and password is incorrect.")
            req.flash("msg","This Username and Password is Incorrect. !")
            res.redirect("/login")
        }
       else{
           if(result[0].password==sha1(p)){
               req.session.uid=result[0]._id
               req.session.name=result[0].name
               req.session.is_user_logged_in=true

               console.log(req.session)
               res.redirect("/user")
           }
           else{
            //    console.log("password is incorrect.")
            req.flash("msg","This Password is Incorrect. !")
            req.flash("u",req.body.email)
            res.redirect("/login")
           }
       }
    })

})


module.exports=routes;