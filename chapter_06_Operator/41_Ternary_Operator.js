//The ternary operator is a short way of writing if...else.
//condition ? valueIfTrue : valueIfFalse

// 1. Login / Logout Button
const isLoggedIn = true;
const btnText = isLoggedIn ? "Logout" : "Login";
console.log("Button text: ", btnText); //Used in websites to change button text based on user status.

//2. Dark Mode Toggle
const darkMode = false;
const background = darkMode ? "Black" : "White";
console.log("Background color: ", background); //Changing theme colors dynamically.

//3. Age Verification

const age = 20;
const isEligibleForVoting = age > 18 ? "Yes" : "No";
console.log("Eligible: ", isEligibleForVoting); //Forms, registrations, ticket booking, etc.

//5. Form Validation Message
const email = "rajesh@gmail.com";
const emailEntered = email ? "Email entered" : "Email required";
console.log("Email: ", emailEntered);


//Nested loop using ternary operator: Used for multiple conditions

const height = 150;
const weight = 51;
const isFit = height > 160 ? (weight > 50 ? "Perfect BMI" : "Not perfect") : "Unfit";
console.log("Fit: ", isFit);


// const statusCode = 1000;
// const category = statusCode < 300 ? "Success" :
//     statusCode < 400 ? "Redirectional" : statusCode < 500 ? "Client Error" : "Server Error";
// console.log(`Status: ${category} = ${statusCode}`);

const statusCode = 500;
const category = statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirectional" : statusCode < 500 ? "Client Error" : "Server Error";
console.log("Category: ", category, "| Status: ", statusCode);