//Type 2: Param but no return

function greet(name) {
    console.log("Hii", name);
}


greet("Rajesh");

let a = greet("Bablu");
console.log(a);

function begger(money) {
    console.log("Thanks for", money, "rs.");
}

let returnMesomething = begger(100);
console.log(returnMesomething);