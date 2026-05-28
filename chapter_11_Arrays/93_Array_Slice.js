//Slicing and combining
//slice does not mutate(change) original array
let num = [1, 2, 3, 4, 5, 6];
let sliced = num.slice(2, 5); //( start, end-1)
console.log(sliced);
console.log(num);

let sliced1 = num.slice(2); //( start, end-1)
console.log(sliced1);
console.log(num.slice(2, 4));

console.log(num.slice(-2)); //-1=last, -2=second last
console.log(num.slice(-4, -2)); //-4=fourth last

console.log(num.slice(0)); //from  0th

let n = [1, 2, 3, 4, 5, 6];
console.log(n.slice(2, 5)); //[3, 4, 5]
console.log(n);
// splice(start, deleteCount, ...itemsToAdd)
console.log(n.splice(2, 6)); //
console.log(n);

// 1. What slice does (non-mutating, returns new array,
//  end index exclusive)
// 2. What splice does (mutating, removes elements,
//  returns removed elements)








