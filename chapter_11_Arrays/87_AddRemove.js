let arr = [1, 2, 3];
console.log(arr);
arr.push(4, 5, 6);
console.log(arr);

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1); //delete 1 element from 2nd
console.log(arr);
arr.splice(2, 2); //delete 2 elements from 2nd
console.log(arr);

arr.push(3, 4, 5);
console.log(arr); //[ 1, 2, 6, 3, 4, 5 ]

//it will add at 2nd index
arr.splice(2, 0, 10);
console.log(arr); //[  1, 2, 10, 6,  3, 4,  5]

//it will replace 2nd index
arr.splice(2, 1, 100);
console.log(arr); //[  1, 2, 100, 6,  3, 4,  5]

//it will replace 3 elements from 0th index
arr.splice(0, 3, 1, 2, 3); 
console.log(arr);


