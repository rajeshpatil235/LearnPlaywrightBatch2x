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