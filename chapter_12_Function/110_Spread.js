// console.log(add(...num));
// ...array      // Spread → expands an array

function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
console.log(add(...num));

//...params     // Rest → collects arguments into an array
let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c > 400);
}

console.log(hasError(...responseCodes));

