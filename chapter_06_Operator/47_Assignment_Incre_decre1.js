let a = 5;

console.log(a++ + ++a - --a + a-- + ++a); //5 7 6 6 6 =18

console.log(a); //6

let b = 5;
// 5   5       5   5       5     6   6       4     5
console.log(b + b++ - --b - b-- + ++b - ++b - b-- + --b - ++b); //5 + 5 - 5 - 5 + 5 - 6 - 6 + 4 - 5 = -8

console.log(b); //5
