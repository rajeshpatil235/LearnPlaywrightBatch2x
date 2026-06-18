// * * *
// * *
// *

let n = 3;
for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = i; j > 0; j--) {
        row += "* ";
    }
    console.log(row.trim());
}