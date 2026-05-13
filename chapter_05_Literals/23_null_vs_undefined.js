// ============================================
// Difference between null and undefined
// ============================================

console.log("=== NULL vs UNDEFINED ===\n");

// 1. UNDEFINED
// A variable that has been declared but not assigned a value is undefined
let declaredButNotAssigned;
console.log("1. Declared but not assigned:", declaredButNotAssigned); // undefined

// A function that does not return a value returns undefined
function noReturnValue() {
    // no return statement
}
console.log("2. Function with no return:", noReturnValue()); // undefined

// Accessing a non-existent object property returns undefined
const person = { name: "John" };
console.log("3. Non-existent property:", person.age); // undefined

// typeof undefined is "undefined"
console.log("4. typeof undefined:", typeof undefined); // "undefined"

console.log("\n-------------------------------\n");

// 2. NULL
// null is an intentional absence of any object value (must be assigned explicitly)
let emptyValue = null;
console.log("5. Explicitly assigned null:", emptyValue); // null

// typeof null is "object" (this is a known JavaScript bug/legacy behavior)
console.log("6. typeof null:", typeof null); // "object"

// null is often used to indicate "no value" or "empty" intentionally
let user = null; // user is not logged in
console.log("7. User before login:", user); // null

user = { name: "Alice", role: "admin" }; // user logs in
console.log("8. User after login:", user); // { name: "Alice", role: "admin" }

console.log("\n-------------------------------\n");

// 3. KEY DIFFERENCES

// Difference 1: Type
console.log("=== KEY DIFFERENCES ===\n");
console.log("9. typeof undefined:", typeof undefined); // "undefined"
console.log("10. typeof null:", typeof null);       // "object" (historical bug)

// Difference 2: Equality
console.log("11. null == undefined:", null == undefined);   // true (loose equality)
console.log("12. null === undefined:", null === undefined); // false (strict equality)

// --- WHY? ---
// ==  (loose equality)  → checks value ONLY. JS treats null and undefined as "equal-ish".
// === (strict equality) → checks value AND type. They have different types, so false.

console.log("\n--- Equality deep dive ---");

// With == (loose), JS converts types to match before comparing.
// null and undefined are special: JS says they are equal with ==.
console.log("12a. null == undefined:", null == undefined);        // true  (special rule in JS)
console.log("12b. undefined == null:", undefined == null);        // true  (same thing reversed)

// With === (strict), NO type conversion happens. Type must match too.
// typeof null is "object", typeof undefined is "undefined"
console.log("12c. null === undefined:", null === undefined);      // false (different types)
console.log("12d. typeof null:", typeof null);                    // "object"
console.log("12e. typeof undefined:", typeof undefined);          // "undefined"

// --- Danger of loose equality (==) with other values ---
console.log("\n--- Danger: loose equality surprises ---");
console.log("12f. 0 == false:", 0 == false);        // true  (0 becomes false)
console.log("12g. '' == false:", '' == false);      // true  (empty string becomes false)
console.log("12h. '5' == 5:", '5' == 5);            // true  (string becomes number)
console.log("12i. 0 == '0':", 0 == '0');            // true  (string becomes number)

// === avoids all these surprises
console.log("\n--- Strict equality saves you ---");
console.log("12j. 0 === false:", 0 === false);      // false (number !== boolean)
console.log("12k. '' === false:", '' === false);    // false (string !== boolean)
console.log("12l. '5' === 5:", '5' === 5);          // false (string !== number)
console.log("12m. 0 === '0':", 0 === '0');          // false (number !== string)

// Best practice: Always use === (strict equality).
// The ONLY safe use of == is checking for BOTH null and undefined together:
console.log("\n--- Safe use of == ---");
function isMissing(value) {
    return value == null;  // true if null OR undefined. Safe and short!
}
console.log("12n. isMissing(null):", isMissing(null));           // true
console.log("12o. isMissing(undefined):", isMissing(undefined)); // true
console.log("12p. isMissing(0):", isMissing(0));                 // false
console.log("12q. isMissing(''):", isMissing(''));               // false

// Difference 3: Usage intention
// undefined = JavaScript says "this doesn't have a value"
// null      = Developer says "this intentionally has no value"

function greetUser(username) {
    if (username === null) {
        console.log("13. Guest user (intentionally null)");
    } else if (username === undefined) {
        console.log("14. No username provided (undefined)");
    } else {
        console.log("15. Hello, " + username);
    }
}

greetUser();            // undefined - no argument passed
greetUser(null);        // null - intentionally no user
greetUser("Rajesh");    // normal value

console.log("\n-------------------------------\n");

// 4. PRACTICAL EXAMPLES

// Example: Array.find() returns undefined when not found
const numbers = [10, 20, 30];
const found = numbers.find(n => n === 50);
console.log("16. Array.find() not found:", found); // undefined

// Example: JSON.stringify behavior
console.log("17. JSON.stringify undefined:", JSON.stringify({ a: undefined })); // {}
console.log("18. JSON.stringify null:", JSON.stringify({ a: null }));           // {"a":null}

// Example: Checking for null or undefined
function isNil(value) {
    return value == null; // checks for both null and undefined
}

console.log("19. isNil(undefined):", isNil(undefined)); // true
console.log("20. isNil(null):", isNil(null));           // true
console.log("21. isNil(0):", isNil(0));                 // false
console.log("22. isNil(''):", isNil(""));               // false

// 5. MORE EXAMPLES

console.log("\n-------------------------------\n");
console.log("=== MORE EXAMPLES ===\n");

// void operator always returns undefined
console.log("23. void 0:", void 0);               // undefined
console.log("24. void (1+2):", void (1 + 2));     // undefined

// Destructuring with defaults
const { nickname = "Unknown" } = {};
console.log("25. Destructure default:", nickname); // Unknown (undefined triggers default)

const { title = "No title" } = { title: null };
console.log("26. Destructure with null:", title);  // null (null does NOT trigger default!)

// Optional chaining returns undefined for missing properties
const company = { ceo: { name: "Bob" } };
console.log("27. Optional chaining:", company.ceo?.age);        // undefined
console.log("28. Deep optional chain:", company.manager?.name); // undefined

// Nullish coalescing operator (??) - only null/undefined trigger fallback
let speed = 0;
console.log("29. 0 ?? 100:", speed ?? 100);          // 0 (0 is not null/undefined)

let config = null;
console.log("30. null ?? 'default':", config ?? "default"); // default

let settings;
console.log("31. undefined ?? 'fallback':", settings ?? "fallback"); // fallback

// Sparse arrays have undefined holes
const sparse = [1, , 3];
console.log("32. Sparse array[1]:", sparse[1]);      // undefined
console.log("33. Sparse array length:", sparse.length); // 3

// Function parameter defaults
function multiply(a, b = 5) {
    return a * b;
}
console.log("34. multiply(2):", multiply(2));       // 10 (b is undefined, uses default)
console.log("35. multiply(2, null):", multiply(2, null)); // 0 (null is used, not default!)

// delete operator leaves property undefined-ish
const car = { brand: "Toyota", year: 2020 };
delete car.year;
console.log("36. After delete:", car.year);         // undefined
console.log("37. 'year' in car:", "year" in car);   // false

// document.getElementById returns null when not found (in browser)
// localStorage.getItem returns null when key missing (in browser)
// These simulate those patterns:
function findById(id) {
    const db = { "1": "Alice", "2": "Bob" };
    return db[id] || null; // return null when intentionally not found
}
console.log("38. findById('99'):", findById("99")); // null

// Global undefined is a property that can be overwritten in non-strict mode
// (but don't do this!)
console.log("39. window.undefined:", typeof undefined); // undefined

// Object.create(null) creates object with no prototype
const dict = Object.create(null);
console.log("40. Object.create(null):", dict.toString); // undefined (no inherited methods)

// parseInt with non-string can return NaN, but missing args return NaN from undefined
console.log("41. parseInt(undefined):", parseInt(undefined)); // NaN
console.log("42. parseInt(null):", parseInt(null));           // NaN (surprise: parses "null")

// Number() conversions
console.log("43. Number(undefined):", Number(undefined)); // NaN
console.log("44. Number(null):", Number(null));           // 0

// Boolean conversions
console.log("45. Boolean(undefined):", Boolean(undefined)); // false
console.log("46. Boolean(null):", Boolean(null));           // false

// String conversions
console.log("47. String(undefined):", String(undefined)); // "undefined"
console.log("48. String(null):", String(null));           // "null"

console.log("\n=== SUMMARY ===");
console.log("undefined → automatically assigned by JS when no value exists");
console.log("null      → intentionally assigned by developer to mean 'no value'");
console.log("Use === for reliable comparison, or == null to check for both");
console.log("Remember: destructuring defaults and ?? only treat undefined/null as missing");
