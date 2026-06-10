
function getStatusCode(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if (code == 500) return "Server Error";
}

console.log(getStatusCode(200));
console.log(getStatusCode(404));
console.log(getStatusCode(500));

function logTest(name) {
    console.log(`Running: ${name}`);
    //no return statement
}

let result = logTest("Login");
console.log(result);

// Rule to remember:

// return value; → returns that value.
// No return → returns undefined. ✅

console.log(greet("Rajesh"));

function greet(name) {
    return `Hello, ${name}`;
}

greet1("Rajesh");

function greet1(name) {
    console.log(name);
}

console.log(greet1("Rajesh"));

function greet1(name) {
    console.log(name);
}

sayHi("Bob");
const sayHi = function (name) {
    return `Hi, ${name}`;
}



