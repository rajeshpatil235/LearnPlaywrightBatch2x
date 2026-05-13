let name = "Rajesh";
name = "Rajesh Patil";

let fullName = `Hi, ${name}`;

console.log(fullName);

let env = "staging";
env = "preprod";
let userId = "adminRajesh";

const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;

console.log(apiUrl);

env = "prod";
apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);
