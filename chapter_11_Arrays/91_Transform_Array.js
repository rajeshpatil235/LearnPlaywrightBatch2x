let marks = [46, 67, 33, 45, 65];

// map - transform every element, return a new arrays
// A map will always return the same number of elements that you have, 
// but based on the condition, their values will be changed. 

let result = marks.map(s => s > 50 ? "pass" : "fail");
console.log(result);

// filter — keeps elements that pass a test
let moreThan50 = marks.filter(s => s > 50);
console.log(moreThan50);

// reduce , // reduce — accumulates to a single value
let total = marks.reduce((mark, sum) => mark + sum, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2, 3], [3, 6, 7], [7, 8, 9]];
console.log(nested.flat());