//Even or Odd

let a = 57;

if (a % 2 === 0) {
    console.log("'a' is an even no.");
}
else {
    console.log("'a' is an odd no.")
}


// Student Grade Calculator

let score = 90;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("Fail");
}


//Leap Year Check

let year = 1600;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log("It is a leap year");
}
else {
    console.log("It is not a leap year");
}