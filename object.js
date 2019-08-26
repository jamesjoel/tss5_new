var obj = { 
        name : "rohit",
        age : 25,
        city : "indore",
        gender : "male",
        demo : function(a, b){
           var c = a+b;
           return c;
        }

    };



var ans1=obj.demo(500, 100);
var ans2=obj.demo(1000, 500);

console.log(ans1);