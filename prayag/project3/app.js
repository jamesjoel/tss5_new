var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var cookieParser=require("cookie-parser")
var session=require("express-session")
var flash=require("express-flash")
var nocache=require("nocache")


var sha1=require("sha1")
var fileUpload=require("express-fileupload")

var Category=require("./models/category")


var routes=require("./config/routes")


app.set("view engine","ejs")
app.use(express.static(__dirname+"/public"))
app.use(bodyParser())
app.use(cookieParser())
app.use(fileUpload())
app.use(session({secret:"PRP"}))
app.use(flash())
app.use(nocache())




app.use(function(req,res,next){
    Category.find({},function(err,result){
        // console.log(result);
        // console.log(sha1("admin"))
        res.locals.demo="The Stepping Stone";
        res.locals.session=req.session;
        res.locals.menu_category=result
        
        next();

    })
   

})



app.use(routes)






var port=process.env.PORT || 3000
app.listen(port,function(){
    console.log("server is running...")
})