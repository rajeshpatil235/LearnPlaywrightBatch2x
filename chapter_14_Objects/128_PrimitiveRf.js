// Primitive vs Reference Types
// In primitive, original value is not changed.
let a = 10;
let b = a;
console.log(b);
b = 99;
console.log(b);
console.log(a);


// Reference - object, array, function (Non-primitive)
// In Reference, original value is also changed.
let obj1 = { name: "Rajesh" };
console.log(obj1);
let obj2 = obj1;
console.log(obj2);
obj2.name = "Shiv";
console.log(obj2);
console.log(obj1);




