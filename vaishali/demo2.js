/*
-------- Operators  
            A]  Aritimetic Ope

                1.      +
                2.      -
                3.      *
                4.      /
                5.      % (modules)
            
            B] Assinment Ope
                
                1.      =
                2.      +=
                3.      -=
                4.      *=
                5.      /=
                6.      %=

            C] Inc / Dec Ope

                1.      ++
                2.      --

            
            D] Compairession Ope

                1.      ==
                2.      !=
                3.      <
                4.      <=
                5.      >
                6.      >=
                7.      ===
            
            E] Logical Ope

                1.  ||    (OR)
                2.  &&    (And)
                3.  !     (is not)  

            F] String Ope

                1.      +
                2.      +=


------------ Conditional Statements

            1. if()
            2. if()........else
            3. if()......else if() ...... else if() ..... else
            4. switch....case


------------ Loop
            
            1.  for()
            2.  while()
            3.  do....while()
            4.  forEach()






        var a = 10;
        if(a == 1)
        {
            console.log("red");
        }
        else if(a == 2)
        {
            console.log("green");
        }
        else if(a == 3 || b == 7)
        {
            console.log("blue");
        }
        else
        {
            console.log("no color")
        }
        ........... Switch .... Case ......


        var a = 2;
        switch(a){

            case 1 : console.log('red');
                    break;
                    
            case 2 : console.log('blue');
                    break;
                    
                    
            case 3 : console.log('yellow');
                    break;
                    
                    
            case 4 : console.log('pink');
                    break;
                    
                    
            case 5 : console.log('green');
                    break;

            default : console.log("no color");
            
        }














*/


var data = ["red", "green", "blue", "yellow", "black"];

data.forEach(function(x){
    console.log(x);
});

var json_data = [
    {
        name : "rohit",
        age : 25
    },
    {
        name : "jaya",
        age : 30
    },
    {
        name : "nilesh",
        age : 24
    }
];

json_data.forEach(function(x){
    console.log(x.name);
});
















