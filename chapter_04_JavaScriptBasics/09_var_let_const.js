var v = 10;
let l = 20;
const c = 3.142;

var browser = "chrome";
//redeclaration - declaring the same variable again
var browser = "firefox";
//reassignment - assigning the value again
browser = "edge";

var testCases = ["pending", "rejected", "completed"];

for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}
console.log(i);

console.log("hello");
console.log("hello");

function say() {
    console.log("hello from function");
}
say();
say();