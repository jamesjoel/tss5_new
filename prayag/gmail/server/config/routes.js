var express=require("express");
var routes=express.Router();



routes.use("/api/user",require("../controllers/user"));
routes.use("/api/user/auth",require("../controllers/login"));






module.exports=routes;