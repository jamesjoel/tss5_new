var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));

routes.use("/admin", require("../controllers/admin/index"));
routes.use("/student", require("../controllers/student"));




module.exports=routes;