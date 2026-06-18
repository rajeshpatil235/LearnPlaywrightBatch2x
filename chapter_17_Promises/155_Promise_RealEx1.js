let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: "User data"
    })
});

apiCall.then(function (response) {
    console.log(response);
})

apiCall.then(function (response) {
    console.log(response.status);
})

apiCall.then(function (response) {
    console.log(response.body);
})