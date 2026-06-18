function cafe(item, callWhenTableAvailable) {
    console.log("Checking...1");
    console.log("Checking...2");
    console.log("Checking...3");
    console.log(item);
    callWhenTableAvailable();
}

function callWhenTableAvailable() {
    console.log("Calling 11111");
}

cafe("pizza", callWhenTableAvailable);

cafe("burger", function () {
    console.log("Calling 22222");
})

cafe("vada", () => {
    console.log("Calling 33333");
})