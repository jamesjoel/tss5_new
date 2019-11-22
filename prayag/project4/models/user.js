var connect=require("../config/connect");

var dbName="tss5";
var table="user";

module.exports.find=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collections(table).find(where).toArray(cb);
    });
}


module.exports.insert=function(obj,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collections(table).insert(obj,cb);
    });
}

module.exports.update=function(where,obj,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collections(table).update(where,{$set:obj},cb);
    });
}

module.exports.delete=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collections(table).remove(where,cb);
    });
}