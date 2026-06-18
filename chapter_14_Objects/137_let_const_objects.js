let user = { name: "Rajesh", age: 30 };
console.log(user);
user.name = "Shiv";
console.log(user);
user = { firstName: "Shiv" };
console.log(user);

const user1 = { name: "Rajesh", age: 30 };
console.log(user1);
user1.name = "Shiv";
console.log(user1);
user1 = { firstName: "Shiv" }; //TypeError: Assignment to constant variable.
console.log(user1);

