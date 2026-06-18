// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// })
// p.then(function (value) {
//     console.log("Answer: ", value);
// })

// let p = new Promise(function (resolve, reject) {
//     reject("Something broke.");
// })
// p.catch(function (error) {
//     console.log("Error:", error);
// })

// let p = Promise.resolve(5);

// p.then(function (value) {
//     return value * 10;
// }).then(function (value) {
//     console.log("Value:", value);
// })

// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//         return val + 1;
//     }).then(function (val) {
//         console.log(val);
//     })

// Promise.resolve("Start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("code break!!!")
//     }).then(function (val) {
//         console.log("This code will not run.");
//     }).catch(function (error) {
//         console.log(error.message);
//     })
// What happens if you throw an error inside.then() ?
// Answer :
// Throwing an error inside a.then() automatically rejects the Promise, skips the remaining.then() blocks, 
// and transfers control to the nearest.catch().

// Promise.reject("Test failed")
//     .then(function (data) {
//         console.log("Data:", data);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     }).finally(function () {
//         console.log("Cleanup mode");
//     })

// Promise.resolve("Win").then(function (msg) {
//     console.log(msg);
// })

// Promise.resolve("Loss").then(function (msg) {
//     console.log(msg);
// })

// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3])
//     .then(function (result) {
//         console.log("All:", result);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     })

// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.reject("Search: FAIL");
// let t3 = Promise.resolve("Logout: PASS");

// Promise.all([t1, t2, t3])
//     .then(function (result) {
//         console.log("All:", result);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     })

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r, i) {
        // console.log(r);
        console.log(`Test#${i + 1}, Status: ${r.status}, Value: ${r.value || r.reason}`);
    })
})