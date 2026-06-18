let order = new Promise(function (resolve, reject) {
    let isFoodReady = true;
    if (isFoodReady) {
        resolve("🍕 Food Delivered");
    } else {
        reject("❌ Order Cancelled");
    }
})

// console.log(order);
order
    .then(result => console.log(result))
    .catch(error => console.log(error));
