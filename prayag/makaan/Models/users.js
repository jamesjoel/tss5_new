var connect=require("../config/connect");

var dbName="makaan";
var table="user";


module.exports.Find=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collection(table).find(where).toArray(cb)
    });
}

module.exports.Insert=function(obj,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collection(table).insert(obj,cb)
    })
}

module.exports.Update=function(where,obj,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collection(table).update(where,{$set:obj},cb)
    })
}

module.exports.Delete=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName);
        db.collection(table).remove(where,cb)
    })
}
