// Arrow Function (ES6)

const greet = function (name) {
    return "hello " + name;
}

let r = greet("Rajesh");
console.log(r);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const say = (name) => "hello " + name;
console.log(say("Rajesh"));


const doubleIt = num => num * 2; // value of (num*2) is returned
console.log(doubleIt(10));

const tripleIt = num => console.log(num * 3);
tripleIt(10); //here no need to used console.log as we already used it as a return statement.

const printIt = (name) => console.log(name);
console.log(printIt("rajesh"));
printIt("Taniya");

function add1(a, b) {
    return a + b;
};
console.log(add1(2, 3));

const add2 = (a, b) => a + b;
console.log(add2(2, 2));

function say1(msg) {
    console.log(msg);
}
say1("Hi");
console.log(say1("Hi"));

const say2 = (msg) => console.log(msg);
say2("bye");
console.log(say2("bye"))

const greet1 = (name) => {
    const message = "Hi " + name;
    return message;
}
greet1("rajesh");

console.log(greet1("rajesh"));