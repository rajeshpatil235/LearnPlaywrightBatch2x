const retry = function (testName, maxTries = 3, delay = 1000) {
    return `Retrying "${testName}" up to ${maxTries} times with ${delay}ms apart`;
}

console.log(retry("Login test"));
console.log(retry("Registration test", 5, 2000));