var express = require("express");
var routes = express.Router();
var Admin = require("../../models/admin");
var sha1 = require("sha1");

routes.get("/", function (req, res) {
    var pagedata = { pagename: "home/index"};
    res.render("admin/layout", pagedata);
});




module.exports = routes;