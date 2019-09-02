function demo()
{
    return function(){
        return {
            name : "rohit"
        }
    };
}


var a = demo();
var b=a();
console.log(b.name);


