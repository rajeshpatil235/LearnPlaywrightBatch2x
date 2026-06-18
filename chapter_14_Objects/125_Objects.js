let student1 = { name: "Rajesh", age: 32, city: "Mumbai" };
let student2 = { name: "Shiv" };
let student3 = { name: "Kishor", city: "MUM" };

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 }; //JSON

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let b = a; //both are pointing to same object now
console.log(b.status);

b.status = "fail";
console.log(b.status);
if (a === b) {
    console.log("true");
} else {
    console.log("false");

}
// here both are different
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}






