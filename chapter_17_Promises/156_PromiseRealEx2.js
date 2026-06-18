let apiCall = new Promise(function (resolve, reject) {
    reject("Error 500");
})

apiCall.then(function (data) {
    console.log("Success or Resolve");
}).catch(function (error) {
    console.log(error);
})

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped in this case.