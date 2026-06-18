function greetTester(name, callback) {
    console.log("Hello", name);
    callback();
}

greetTester("Rajesh", function () {
    console.log("Let's start testing.");
})

greetTester("Shiv", () => {
    console.log("Let's eat.");
})

// Callback with Parameters
function runTest(testName, callback) {
    let status = "pass";
    callback(testName, status);
}

runTest("login", function (testName, status) {
    console.log(testName, "=", status);
})

// Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirection"];

bugs.forEach(function (bug, index) {
    console.log("Bug #" + (index + 1) + " = " + bug);
})

console.log("Total bugs: " + bugs.length);

// index actually contains the bug text
// bug actually contains the index number

// Easy Interview Tip

// For forEach() remember:

// array.forEach((value, index) => {
//     console.log(value, index);
// });