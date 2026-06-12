let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));

// Concatenation
let a = "Hello";
let b = "World";
let c = a + " " + b;
console.log(c);
console.log(a.concat(" ", b));
console.log(`${a} ${b}`);
//split() returns an array
let r = "pass, fail, skip".split("."); // [ 'pass, fail, skip' ] because there is no . to split there.
console.log(r);
let name = "Rajesh Patil".split(" ");
console.log(name); // [ 'Rajesh', 'Patil' ]
let s = "pass,fail,skip".split(",");
console.log(s); // [ 'pass', 'fail', 'skip' ]
let p = "test_login_pass_001".split("_").join(" ")
console.log(p);
// join() returns a string
console.log(["raj", "patil", "QA"].join());
let parts = ["DD", "MM", "YYYY"];
let date = parts.join("/");
console.log(date);



