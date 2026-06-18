const user = { name: "Rajesh", age: 30, city: "NYC", country: "India" };
console.log(user.name);
console.log(user.age);
//deconstruction
//after deconstruction, we can directly access the keys like below
const { name, age } = user;
console.log(name);
console.log(age);
// Rename variables
const { name: myName, age: myAge } = user;
console.log(myName);
console.log(myAge);
//Default values
const { country = "USA" } = user; //USA will be printed if there is no country value
console.log(country);
console.log(user);

const data = {
    user: {
        name: "John",
        add: {
            city: "NYC"
        }
    }
}

console.log(data.user.add.city); //NYC
console.log(data.user.add); //{ city: 'NYC' }
console.log(data.user); //{ name: 'John', add: { city: 'NYC' } }
console.log(data); //{ user: { name: 'John', add: { city: 'NYC' } } }

console.log(data.user.name); //John






