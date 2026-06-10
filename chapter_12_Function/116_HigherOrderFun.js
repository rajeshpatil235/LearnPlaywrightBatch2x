//Higher order function
//A function that takes a function as an argument

function runWithLogin(testFn, testCaseName) {
    let result = testFn();
    console.log(`Running test: ${testCaseName}`);
    return `${testCaseName} ${result}`;
}

function loginPassed() {
    return "pass";
}

function loginFailed() {
    return "failed";
}

console.log(runWithLogin(loginPassed, "Login"));
console.log(runWithLogin(loginFailed, "Login"));

// What is a Higher-Order Function?

// A function is called a Higher-Order Function if it:
// Takes another function as an argument, OR
// Returns a function.

// In your code, runWithLogin() takes testFn as an argument, so it is a Higher-Order Function.