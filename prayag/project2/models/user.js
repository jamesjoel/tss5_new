var connect=require("../config/connect")

var dbname="tss5"
var table="user"

module.exports.find=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbname)
        db.collection(table).find(where).toArray(cb)
        
    })
    
}

module.exports.insert=function(obj,cb){
    connect(function(err,client){
        var db=client.db(dbname)
        db.collection(table).insert(obj,cb)
        
    })
    
}

module.exports.update=function(where,obj,cb){
    connect(function(err,client){
        var db=client.db(dbname)
        db.collection(table).update(where,{$set:obj},cb)
        
    })
    
}


module.exports.delete=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbname)
        db.collection(table).remove(where,cb)
        
    })
    
}