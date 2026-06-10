// Rest Parameter vs Spread Operator
// Both use ..., but they do opposite things.

// Rest Parameter (Collect)
function show(...args) {
    console.log(args);
}

show(1, 2, 3); //[ 1, 2, 3 ]

// Spread Operator (Expand)
const nums = [1, 2, 3];

console.log(...nums); //1 2 3