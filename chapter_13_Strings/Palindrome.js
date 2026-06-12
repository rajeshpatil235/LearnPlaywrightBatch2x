let name = "Rajesh";

let reversed = name.split("").reverse().join("");
console.log(reversed);

if (name == reversed) {
    console.log("Palindrome");
}
else {
    console.log("Not a palindrome");
}


let rev = "";
for (let i = name.length - 1; i >= 0; i--) {
    // let rev = name.toLowerCase().charAt(i);
    rev = rev + name[i];
}
console.log(rev);

//reverse a number
let num = 12345;

// let reversed1 = Number(num.toString().split("").reverse().join(""));
let reversed1 = 0;
while (num > 0) {
    let digit = num % 10;           // get last digit
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);     // remove last digit
}

console.log(reversed1);

//reverse an array
let r = [1, 2, 3, 4, 5];
let s = [];
for (let i = r.length - 1; i >= 0; i--) {
    s[s.length] = r[i];
}
console.log(s);
