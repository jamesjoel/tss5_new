var express = require("express");
var routes = express.Router();

routes.use("/", require("./login"));
routes.use("/home", backdoor, require("./home"));
routes.use("/category", backdoor, require("./category"));
routes.use("/product", backdoor, require("./product"));


function backdoor(req, res, next){
    if(! req.session.is_admin_logged_in){
        res.redirect("/admin");
        return;
    }
    next();
}


module.exports=routes;