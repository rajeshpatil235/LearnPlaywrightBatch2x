//Rest Params using spread
// A rest parameter (...) allows a function to accept a variable number of arguments and stores
//  them in a single array. It must be the last parameter in the function definition.
function testResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}
testResult("LoginPage", 1, 2, 3);

testResult("SignUpPage", "Created", "Not created", "Invalid email format", "Timeout error");

function name(...names) {
    console.log(names);
    // console.log(names);
}

name("Rajesh", "Ravi", "Kishor");
name("Rajesh", "Ravi", "Kishor", "Chandu");



