// Real QA Scenario: End-to-End Login for the App.vwo.com 

// openBrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function openBrowser(callback) {
    console.log("Chrome browser is opening");
    setTimeout(() => {
        callback();
    }, 1000);
}

function goToLoginPage(callback) {
    console.log("Login page is opening");
    setTimeout(() => {
        callback();
    }, 1000);
}

function enterCredentials(callback) {
    console.log("Credentials are being entered");
    setTimeout(() => {
        callback();
    }, 500);
}

function clickLogin(callback) {
    console.log("Login button is being clicked");
    setTimeout(() => {
        callback();
    }, 250);
}

// THIS IS CALLBACK HELL 👇
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test completed");

            })
        })
    })
})