let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.testName = "login";

console.log(config);
delete config.browser;
if (config.browser === "Chrome") {
    console.log("I will execute in chrome browser only");
}

//we can directly create like this also
let config2 = {
    browser: "Safari",
    timeout: 4000,
    testName: "signup"
}
console.log(config2);
