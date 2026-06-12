let str = "Login_Test_Pass_001";
//slice(start, end)- negative indexes supported
console.log(str.length);

console.log(str.slice(0, 5));
console.log(str.slice(6)); // 6 to end
console.log(str.slice(19)); //blank

console.log(str.slice(-3)); // slice from last third character
console.log(str.slice(-8)); // slice from last eightth character

// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(0, 5));
console.log(str.substring(6));
console.log(str.substring(19));  //blank
console.log(str.substring(-1)); // treats as 0




