let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 201]
];
// How many test cases have we executed?  3
// How many test cases are passed?  2
// What is the status code that you have got for the fail?  404

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[0].length; j++) {
        console.log(testMatrix[i][j]);
        // process.stdout.write(testMatrix[i][j]); 
        //for above line: TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (200)
    }
    console.log();
}

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();

}

//forEach

testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " ")
    );
    console.log();
});

//forEach

testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell+" ")
    );
    console.log();
});