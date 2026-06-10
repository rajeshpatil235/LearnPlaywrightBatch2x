//Why Closure Matters
// Normally, local variables disappear when a function finishes.

function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded ${max} retries.`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain; //The outer function returns the inner function.
}
//The inner function tryAgain remembers attempts and max even after makeRetryTracker() has completed.
let retry = makeRetryTracker(3); //retry now refers to the tryAgain function.
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));

// Login retries
// OTP attempts
// API retry counts
// Test execution retries in Playwright