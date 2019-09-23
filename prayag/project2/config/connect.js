var MongoClient=require("mongodb").MongoClient
var Dburl="mongodb://localhost:27017"

module.exports= function(cb){
    MongoClient.connect(Dburl,cb)
}
