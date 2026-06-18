const user = {
    name: "John",
    age: 30,
    email: "abc@gmail.com"
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["name"]);
console.log(user["age"]);
// Dynamic property access
const key = "age";
console.log(user[key]);
// Adding/modifying properties
user.city = "NYC"; //adding
user.age = 40; //modifying
console.log(user);




