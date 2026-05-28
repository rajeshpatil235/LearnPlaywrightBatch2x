let results = ["pass", "fail", "no", "yes", "pass", "pass", "fail"];
console.log(results.indexOf("pass"));
console.log(results.indexOf("iii")); //returns -1 if not found

console.log(results.lastIndexOf("pass"));

console.log(results.includes("pass"));

console.log(results.includes("faill"));

let num = [1, 0, 0, 4, 5, 6];
console.log(num.find(s => s > 1)); //find first element which matches

console.log(num.findLast(s => s > 1)); //find last element which matches

console.log(num.findIndex(s => s > 1)); //find first element's index which matches

console.log(num.findLastIndex(s => s > 1)); //find last element's index which matches






