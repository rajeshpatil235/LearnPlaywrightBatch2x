// // // *
// // // * *
// // // * * *

// // // let rows = rows.length;
// // // let columns = rows[].length;
// // let n = 3;
// // for (let i = 1; i <= n; i++) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //         // console.log("*");
// //         // process.stdout.write("*");
// //         row += ("*");

// //     }
// //     console.log(row);
// // }


// let n = 3;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i ; j++) {
//         process.stdout.write("*");
//     }
//     console.log("");

// }

// *
// * *
// * * *

let n = 3; //this is no. of rows
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ");
//     } console.log(" ");
// }

//this is perfect
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    } console.log(row.trim());
}






