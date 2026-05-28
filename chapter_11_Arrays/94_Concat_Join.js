let a = [1, 2];
let b = [3, 4, 5];

// let c = a + b;
// console.log(c);

let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

//Join
let s = ["pass", "fail", "skip", "blocked"].join("");
console.log(s);
let s1 = ["pass", "fail", "skip", "blocked"].join(" ");
console.log(s1);
let s2 = ["pass", "fail", "skip", "blocked"].join("|");
console.log(s2);
let s3 = ["pass", "fail", "skip", "blocked"].join("-");
console.log(s3);

