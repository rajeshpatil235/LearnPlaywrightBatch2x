console.log(null == 0)
console.log(null >= 0)
console.log(null == 0 || null > 0);
console.log(null === 0);

console.log("------------------");

// let count = count + 1; // initialization is required for let
console.log(count);
var count = count + 1;
console.log(count);
count = 1;
console.log(count);
count = count + 1;
console.log(count);

// ?? is called the Nullish Coalescing Operator in JavaScript.
// It provides a default value only when the left side is: null or undefined

const milk = null;
const isMilkAvailable = milk ?? "Cow milk available";
console.log(isMilkAvailable);

const user = {
    age: undefined
};

console.log("Age: ", user.age ?? "Not Provided");
