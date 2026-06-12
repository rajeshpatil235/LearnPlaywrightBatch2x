
let str = "Hello World!";
console.log(str.length);
console.log(str[0]); //H
console.log(str[12]); //undefined - (Out of range)
console.log(str[-1]); // undefined - (Out of range)
console.log(str.at(-1)); //!
console.log(str.at(-6)); //W


console.log(str.charAt(0)); //H
console.log(str.charAt(12)); // blank - (Out of range)
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(12)); //NaN - (Out of range)
