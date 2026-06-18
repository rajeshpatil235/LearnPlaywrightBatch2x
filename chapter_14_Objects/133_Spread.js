const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };
const copy = { ...obj1 };
console.log(copy);

let config1 = { browser: "chrome", timeout: 1000 };
console.log(config1);
// ✅ Modifying properties — ALLOWED
config1.browser = "firefox"
config1.timeout = 2000;
console.log(config1);
config1 = { browser: "safari" };
console.log(config1);

const config = { browser: "chrome", timeout: 1000 };
console.log(config);
config.browser = "safari";
config.timeout = 2000;
config.retries = 2;
console.log(config);



