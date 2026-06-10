//Scope in function

let env = "staging";

function setupConfig() {
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setupConfig(); //staging 3000
console.log(env); //staging
console.log(timeout); //ReferenceError: timeout is not defined
