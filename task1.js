var obj = {
    name : "rohit",
    math : 75,
    science : 50,
    demo : function(a, b){
        var c = a+b;
        return {
            address : "testing",
            ans : c*c,
            test : function(){
                console.log("hello world");
            }
        };
    }
};

var x = obj.demo(5, 7);
x.test();



