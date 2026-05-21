// number == string

// console.log(42 == "43");  //false
// console.log(42 == "42"); //true
// console.log(42 === "42"); //false

// console.log(5 === 5); //true
// console.log(5 === "5"); //false

// console.log(5 == 5); //true
// console.log(5 == "5"); //true

// console.log(0 == ""); //true
// console.log(0 === ""); //false

// console.log(true == 1); //true
// console.log(true == "1"); //true
// console.log(false == 0); //true
// console.log(false == "0"); //true
// console.log(false == '0'); //true

console.log(true == 1); //true
console.log(true == 2); //false
console.log(true == "2"); //false

let num = 2;
if (num) {
    console.log("2 is truthy")
} else {
    console.log("2 is falsy")

}
//Falsy============
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Truthy==============
// "hello"
// []
// {}
// 1
// -5
// true
// "0"


