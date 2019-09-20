var express = require("express");
var routes = express.Router();
/*
.use()

.get()

.post()

.delete()

.put()

.all()
-----------------  .set()
-----------------  .listen()
*/

// routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
// routes.use("/contact", require("../controllers/contact"));


module.exports=routes;


