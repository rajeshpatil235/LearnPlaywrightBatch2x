// let checkAuth = Promise.resolve("Auth OK");
// let checkBD = Promise.resolve("DB OK");
// let checkCache = Promise.resolve("Cache OK");

// Promise.all([checkAuth, checkBD, checkCache]).then(function (results) {
//     console.log("All the checks fine.");
// })

// Promise.all(
//     [Promise.resolve("Auth OK"),
//     Promise.reject("DB down"),
//     Promise.resolve("Cache OK")
//     ]).then(function (results) {
//         console.log(results);
//     }).catch(function (error) {
//         console.log(error, "so TC failed");
//     })

Promise.allSettled([
    Promise.resolve("Test A Pass"),
    Promise.reject("Test B Fail"),
    Promise.resolve("Test C Pass")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log(`Test#${i + 1} Status: ${r.status}, Value: ${r.value || r.reason}`);
    })
})



console.log("User:", user);       // ✅ Logging // , → for debugging/logging variables and objects.
console.log(`User: ${user.name}`);// ✅ Displaying values // `${}` (template literals) 
// → preferred modern approach.
console.log("User: " + user.name);// ✅ Works, but older style //
//  + → for simple string concatenation (less common nowadays).
// String + Anything → Concatenation (convert to string)
// 10 + 20          // 30
// "10" + 20        // "1020"
// "Hello " + true  // "Hello true"
// "Age: " + 30     // "Age: 30"
