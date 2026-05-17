// Confusing Comparison Cases with == and ===

// 1. [] == ![]  -> true (Classic JavaScript gotcha)
// ![] evaluates to false, [] is coerced to 0, false is coerced to 0
console.log([] == ![]); // true

// 2. [] == false  -> true
// [] is coerced to 0, false is coerced to 0
console.log([] == false); // true

// 3. '' == false  -> true
// Empty string is coerced to 0, false is coerced to 0
console.log('' == false); // true

// 4. 0 == '0'  -> true
// String '0' is coerced to number 0
console.log(0 == '0'); // true

// 5. 0 == []  -> true
// [] is coerced to empty string '', then to number 0
console.log(0 == []); // true

// 6. NaN == NaN  -> false
// NaN is never equal to itself, even with loose comparison
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// 7. null == undefined  -> true (only case where null is loosely equal to something)
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. [null] == false  -> true
// [null] becomes "null"? No wait, [null] coerces to empty string? Actually, array with null... 
// [null].toString() -> "" -> 0, false -> 0
console.log([null] == false); // true

// 9. [undefined] == false  -> true
// Similar to [null], coerces to empty string then 0
console.log([undefined] == false); // true

// 10. [[[]]] == false  -> true
// Nested empty arrays all coerce to empty string then 0
console.log([[[]]] == false); // true

// 11. 2 == [2]  -> true
// Array [2] coerces to string "2", then to number 2
console.log(2 == [2]); // true

// 12. 2 == [[[[2]]]]  -> true
// Nested arrays with single element 2 coerce to "2" then 2
console.log(2 == [[[[2]]]]); // true

// 13. [] + []  -> "" (empty string)
// Arrays are coerced to strings, empty array becomes ""
console.log([] + []); // ""

// 14. [] + {}  -> "[object Object]"
// [] becomes "", {} becomes "[object Object]"
console.log([] + {}); // "[object Object]"

// 15. {} + []  -> 0 (in some contexts) or "[object Object]" (in others)
// When parsed as expression, {} is block statement, +[] is unary plus on empty array = 0
// But as statement, {} is object, [] is array
// console.log({} + []); // 0 or "[object Object]" (context dependent)

// 16. true + true  -> 2
// true is coerced to 1 in numeric context
console.log(true + true); // 2

// 17. typeof null  -> "object" (not comparison, but very confusing)
console.log(typeof null); // "object"

// 18. null >= 0  -> true (null is coerced to 0)
// null <= 0  -> true
console.log(null >= 0); // true
console.log(null <= 0); // true

// 19. undefined >= 0  -> false (undefined is coerced to NaN)
console.log(undefined >= 0); // false

// 20. [] == 0  -> true
console.log([] == 0); // true

// 21. [0] == false  -> true
console.log([0] == false); // true

// 22. '1' == true  -> true
console.log('1' == true); // true

// 23. '2' == true  -> false (!)
// true coerces to 1, '2' coerces to 2
console.log('2' == true); // false

// 24. '0' == false  -> true
console.log('0' == false); // true

// 25. '' == 0  -> true
console.log('' == 0); // true

// 26. 'false' == false  -> false (!)
// 'false' is a non-empty string, coerces to NaN; false coerces to 0
console.log('false' == false); // false

// 27. Object.is() vs === for edge cases
// Object.is(0, -0)  -> false, but 0 === -0 is true
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false

// Object.is(NaN, NaN)  -> true, but NaN === NaN is false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
