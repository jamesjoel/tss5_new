var express=require("express");
var routes=express.Router();




routes.use("/api/user/register",require("../controllers/register"));






module.exports=routes;