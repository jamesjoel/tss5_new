/*
var data = ["red", "green", "blue", "yellow"];
data.forEach(function(x, n){
    console.log(x,"-----", n);
    
}); */


var json_data = [
    {
        name : "rohit",
        age : 25,
        city : "ujjain"
    },
    {
        name : "james",
        age : 25,
        city : "indore"
    },
    {
        name : "nidhi",
        age : 20,
        city : "bhopal"
    },
    {
        name : "gaurav",
        age : 23,
        city : "indore"
    },
    {
        name : "raj",
        age : 23,
        city : "bhopal"
    }
];

json_data.forEach(function(x){
    console.log("Full Name---",x.name);
});


