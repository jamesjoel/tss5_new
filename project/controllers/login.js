var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { title: "Login", pagename: "login/index" };
    res.render("layout", pagedata);
});

routes.post("/", function(req, res){
    var e = req.body.email;
    var p = req.body.password;
    User.find({ email : e }, function(err, result){
        
        if(result.length==0){
            console.log("this email and password is incorrect");
        }
        else{
            if(result[0].password == sha1(p)){
               
                req.session.uid = result[0]._id;
                req.session.name = result[0].name;
                req.session.is_user_logged_in = true;
                res.redirect("/user");
            }
            else{
                
                console.log("this password is incorrect");
            }
        }

    });

});

module.exports = routes;