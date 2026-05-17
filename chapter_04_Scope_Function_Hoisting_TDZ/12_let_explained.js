//let is block-scoped 
//that means we can not access let variables outside blocks
// {} if{} function{} any block
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Count", retryCount)

// let retryCount = 5;
// //SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "pending";
if (testStatus == "pending") {
    let testExecutionTime = 1000;
    console.log("Execution Time in sec: ", testExecutionTime);

}
//ReferenceError: testExecutionTime is not defined

// console.log(testExecutionTime);
