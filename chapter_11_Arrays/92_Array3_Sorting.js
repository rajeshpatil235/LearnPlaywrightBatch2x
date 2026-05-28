let fruits = ["mango", "orange", "banana"];
console.log(fruits.sort());

// let num = [2, 1, 4];
// console.log(num.sort());

// let num = [21, 13, 40, 20];
// console.log(num.sort());

// let num = [1, 10, 2, 20];
// console.log(num.sort());

let num = [2, 21, 10, 13, 11, 14, 2];
console.log(num.sort());

let asc = num.sort((a, b) => a - b); //ascending order
console.log(asc);

console.log(num.sort((a, b) => b - a)); //descending order