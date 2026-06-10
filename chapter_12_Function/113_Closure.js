// Closure

function outer() {
    let message = "hello";
    console.log("Outer function called.");
    function inner() {
        console.log(message);
    }
    return inner;
}

let innerFunction = outer();
innerFunction();

