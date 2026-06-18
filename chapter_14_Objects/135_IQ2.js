const obj = { a: 1, b: 2, c: 3 };
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: "Rajesh", city: "MUM" };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);

}

// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });