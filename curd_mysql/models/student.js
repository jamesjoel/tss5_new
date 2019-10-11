var con = require("../config/connect");

module.exports.find_all=function(cb){

    con.connect(function(err){
        var que = "SELECT * FROM student";
        con.query(que, cb);
    });
}
module.exports.find_by_id = function (id, cb) {

    con.connect(function (err) {
        var que = "SELECT * FROM student WHERE id="+id;
        con.query(que, cb);
    });
}



module.exports.insert = function (obj, cb) {

    con.connect(function (err) {
        var que = "INSERT INTO student (name, age, city) VALUES ('"+obj.name+"', "+obj.age+", '"+obj.city+"')";
        con.query(que, cb);
    });
}

module.exports.update = function (id, obj, cb) {

    con.connect(function (err) {
        var que = "UPDATE student SET name='"+obj.name+"', age="+obj.age+", city='"+obj.city+"' WHERE id="+id;
        con.query(que, cb);
    });
}
module.exports.delete = function (id, cb) {

    con.connect(function (err) {
        var que = "DELETE FROM student WHERE id="+id;
        con.query(que, cb);
    });
}
