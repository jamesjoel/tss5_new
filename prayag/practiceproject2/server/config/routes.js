var express=require("express");
var routes=express.Router();
var jwt=require("jsonwebtoken");



routes.use("/api/user/signup",require("../controllers/signup"));
routes.use("/api/user/auth",require("../controllers/login"));
routes.use("/api/user",require("../controllers/user"));
routes.use("/api/student",require("../controllers/student"));


function backdoor(req,res,next){
    if(!req.headers.authorization)
    {
        res.status(401).send({
           msg:"Unauthorized User" 
        });
    }else
    {
        if(req.headers.authorization="")
        {
            res.status(401).send({
                msg:"Unauthorized User" 
            });
        }else
        {
            var token=req.headers.authorization;
            var payload=jwt.verify(token,"this is my secret key");
            if(!payload)
            {
                res.status(401).send({
                    msg:"Unauthorized User" 
                });  
            }
            else{
                var userData=payload;
                next();
            }
        }
    }
}


module.exports=routes;