var connect = require("../config/connect");

module.exports.select=function(cb){

    connect(function (err, client) {
        var db = client.db("tss5");
        db.collection("teacher").find().toArray(cb);
    });
    
}

