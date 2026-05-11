//var can be redeclared
//var can be reassigned
//var is function scoped
//that means we cannot print the value of var that is printed in function

var a = 10;
console.log(a);

function greet() {
    console.log("hello");
    var a = 20; //function-scoped
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); //not block-scoped
    }
    console.log(a);
}

greet();

console.log(a);
var a = 50;
console.log(a);
