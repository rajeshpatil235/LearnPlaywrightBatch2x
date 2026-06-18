let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];

let sumOfRows = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(sumOfRows);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]
];

//print the failed test cases
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}
//below is also 2D array
let array2D = [
    [1, 2, 3],
    [4, 5],
    [6]
]