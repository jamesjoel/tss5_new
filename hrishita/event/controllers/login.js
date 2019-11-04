var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function(req, res){
    var pagedata = { title: "Login" , pagename: "login/index", msg: req.flash("msg"),u: req.flash("u")};
    res.render("layout1", pagedata);
});

routes.post("/", function(req,res){
    var e= req.body.email;
    var p = req.body.password;
    User.find({ email : e}, function(err, result){
        if(result.length==0){
            req.flash("msg", "This username and password is incorrect!!");
            res.redirect("/login");
        }
        else{
            if(result[0].password == sha1(p))
            {
                if(result[0].status==1)
                {
                    req.session.uid = result[0]._id;
                    req.session.name = result[0].name;
                    req.session.is_user_logged_in = true;
                    res.redirect("/profile");
                }
            }
            else{
                req.flash("msg", "Password incorrect!!");
            }
        }
    });
});

module.exports=routes;