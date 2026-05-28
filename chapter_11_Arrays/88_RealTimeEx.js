let browsers = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browsers);
let new1 = browsers.pop();
console.log(new1);
let new2 = browsers.shift();
console.log(new2);
console.log(browsers);

for (let i = 0; i < browsers.length; i++) {
    if (browsers[i] === "opera") {
        console.log(browsers.indexOf(browsers[i]), "opera has been removed from selenium.");
    }
}

