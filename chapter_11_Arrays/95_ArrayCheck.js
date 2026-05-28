//Check if it is an Array or not

let a = [1, 2, 3];
console.log(Array.isArray(a));

let b = [1];
console.log(Array.isArray(b));

let c = "[1, 2, 3]";
console.log(Array.isArray(c));

let d = "rajesh";
console.log(Array.isArray(d));

//every and some
console.log("----------");
//every = all elements should satisfy the condition
console.log([1, 2, 3, 4].every(s => s > 1));
console.log([1, 2, 3, 4].every(s => s > 0));

//some = atleast one element should satisfy the condition
console.log([2, 3, 4, 5].some(s => s > 5));
console.log([2, 3, 4, 5].some(s => s > 4));