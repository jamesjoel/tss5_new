var express=require("express");
var routes=express.Router();
var jwt=require("jsonwebtoken");




routes.use("/api/user/register",require("../controllers/register"));
routes.use("/api/user/login",require("../controllers/login"));
routes.use("/api/getuser",verifyToken,require("../controllers/home"));


function verifyToken(req,res,next){
    // console.log(req.headers)
    if(!req.headers.authorization)
    {
        res.status(401).send({
            msg:"Unauthorized User"
        });
    }
    else{
        if(req.headers.authorization=="")
        {
            res.status(401).send({
                msg:"Unauthorized User"
            });
        }
        else{
            var token=req.headers.authorization;
            var payload=jwt.verify(token,"this is my secret key")
            if(!payload)
            {
                res.status(401).send({
                    msg:"Unauthorized User"
                });
            }
            req.userData=payload
            next();
        }
    }
}



module.exports=routes;