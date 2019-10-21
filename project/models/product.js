var connect = require("../config/connect");
var mongo = require("mongodb");
var dbName = "tss5";
var table = "product";


module.exports.addNewField = function(cb){
    connect(function(err, client){
        var db = client.db(dbName); 
        db.collection(table).aggregate([
            {
                $addFields : { "demo" : "rohit" }
            }
        ]).toArray(cb);


    });
}
module.exports.lookup = function(cb){
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).aggregate([
            {
                $lookup: {
                    from : "category",
                    localField : "category",
                    foreignField : "_id",
                    as : "cateData"

                }
            }
        ]).toArray(cb);


    });
}





module.exports.find = function (where, cb) {
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).find(where).toArray(cb);
    });
}

module.exports.insert = function (obj, cb) {
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).insert(obj, cb);
    });
}
module.exports.update = function (where, obj, cb) {
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).update(where, { $set: obj }, cb);
    });
}
module.exports.delete = function (where, cb) {
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).remove(where, cb);
    });
}
module.exports.deleteMany = function (where, cb) {
    connect(function (err, client) {
        var db = client.db(dbName);
        db.collection(table).removeMany(where, cb);
    });
}
