var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/signup"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/profile", require("../controllers/profile"));
routes.use("/add_event", require("../controllers/add_event"));

routes.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/login");
});

module.exports=routes;