var express=require("express");
var jwt=require("jsonwebtoken");
var routes=express.Router();



routes.use("/api/user/auth",require("../controllers/login"));
routes.use("/api/user/signup",require("../controllers/signup"));
routes.use("/api/user",backdoor,require("../controllers/user"));




function backdoor(req,res,next){
    if(!req.headers.authorization)
    {
        res.status(401).send({
           msg:"Unauthorized User" 
        });
    }
    else
    {
        if(req.headers.authorization="")
        {
            res.status(401).send({
                msg:"Unauthorized User" 
             }); 
        }
        else
        {
            var token=req.headers.authorization;
            var payload=jwt.verify(token,"this is my secret key");
            if(!payload)
            {
                res.status(401).send({
                    msg:"Unauthorized User" 
                 });
            }
            else
            {
                req.userData=payload;
                next();
            }
        }
    }
}


module.exports=routes;