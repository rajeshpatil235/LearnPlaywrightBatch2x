console.log(name); //ReferenceError: Cannot access 'name' before initialization


let name = "Rajesh";

{
    // Temporal dead zone
    // 
    // 
    // 
    console.log(score);
    let score = "90";
}