// A callback is a function that is passed as an argument to another function and 
// is executed later when needed.
// Examples:

// setTimeout(callback)
// forEach(callback)
// map(callback)
// filter(callback)
// reduce(callback)

function print() {
    console.log("Normal function is called.");
}

function placeOrder(item, callback) {
    console.log("Hi, your", item, "is ready.");
    callback();
}

//first way
// print is a function reference, while print() is a function invocation (execution). 
// Callbacks require a function reference, not the result of a function call.
placeOrder("pizza", print); //Hi, your order is ready.
// Normal function is called.

// placeOrder("pizza", print()); //Normal function is called.
// Hi, your order is ready.
// TypeError: callback is not a function

//second way
placeOrder("burger", function () {
    console.log("Anonymous function.");
});

//third way
placeOrder("vada", () => {
    console.log("Arrow function");
});

