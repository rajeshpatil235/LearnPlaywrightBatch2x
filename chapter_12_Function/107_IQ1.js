function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;

}
runTest("Login", "pass", 320); //returns a value, but you don't store or print it, so nothing is displayed.
console.log(runTest("Login", "pass", 320)); //Login: pass (320ms)
