// A Pure Function is a function that:

// Always returns the same output for the same input.
// Does not modify anything outside itself (no side effects).

function add(a, b) {
    return a + b;
}

console.log(add(2, 5));
console.log(add(2, 5));

// ✅ Same inputs → Same output
// ✅ Doesn't change any external variable
// So add() is a pure function.

function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}

console.log(calculateDiscount(100, 10));
console.log(calculateDiscount(100, 20));
