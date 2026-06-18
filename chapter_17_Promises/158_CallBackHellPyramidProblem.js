function openBrowser() {
    return new Promise(function (resolve) {
        //code to open the browser
        resolve("Chrome browser opened.");
    })
}

// function openBrowser(callback) {
//     setTimeout(() => {
//         console.log("Step 01: Chrome browser opened.");
//         callback();
//     }, 500);
// }

function goToLoginPage() {
    return new Promise(function (resolve) {
        resolve("Login page loaded.");
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered.");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully.");
    })
}

openBrowser()
    .then(function (data) {
        console.log("Step 1: ", data);
        return goToLoginPage();
    }).then(function (data) {
        console.log("Step 2: ", data);
        return enterCredentials();
    }).then(function (data) {
        console.log("Step 3: ", data);
        return clickLogin();
    }).then(function (data) {
        console.log("Step 4: ", data);
    }).catch(function (error) {
        console.log("Error: ", error);
    }).finally(function () {
        console.log("Done execution.");
    })