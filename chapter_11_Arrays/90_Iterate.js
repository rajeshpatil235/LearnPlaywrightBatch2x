let nums = [1, 2, 3, 4, 5];
console.log(nums);

//for loop
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
console.log("----");

// for...of (cleanest for values)
for (num of nums) {
    console.log(num);
}

nums.forEach((i, index) => {
    console.log(i, index);
});

let students = ["Rajesh", "Shiv", "Kishor", "Vaibhav"];

for (let student in students) {
    console.log(student, "=>", students[student]);
}

console.log("----");

for (let [i, num] of nums.entries()) {
    console.log(num, i);
}

for (let [i, num] of nums.entries()) {
    console.log(i, num);
}