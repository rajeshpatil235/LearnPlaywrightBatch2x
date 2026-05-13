// ============================================
// 26 - All JavaScript Literals Examples
// ============================================

console.log("=== 1. STRING LITERALS ===\n");

// Single quotes
let singleQuote = 'Hello World';
console.log("1. Single quotes:", singleQuote);

// Double quotes
let doubleQuote = "Hello World";
console.log("2. Double quotes:", doubleQuote);

// Template literals (backticks) - ES6
let name = "JavaScript";
let template = `Hello, ${name}!`;
console.log("3. Template literal:", template);

// Multi-line strings with template literals
let multiLine = `Line 1
Line 2
Line 3`;
console.log("4. Multi-line string:");
console.log(multiLine);

// Escape sequences
let escaped = "First line\nSecond line\t(tabbed)\\backslash";
console.log("5. Escape sequences:");
console.log(escaped);

console.log("\n-------------------------------\n");
console.log("=== 2. NUMBER LITERALS ===\n");

// Integer
let integer = 42;
console.log("6. Integer:", integer);

// Floating point
let float = 3.14159;
console.log("7. Float:", float);

// Exponential notation
let exp = 1.5e3;   // 1500
let expNeg = 1.5e-3; // 0.0015
console.log("8. Exponential (1.5e3):", exp);
console.log("9. Exponential negative (1.5e-3):", expNeg);

// Hexadecimal (base 16)
let hex = 0xff;    // 255
console.log("10. Hexadecimal (0xff):", hex);

// Binary (base 2) - ES6
let binary = 0b1010; // 10
console.log("11. Binary (0b1010):", binary);

// Octal (base 8) - ES6
let octal = 0o77;    // 63
console.log("12. Octal (0o77):", octal);

// Special number values
console.log("13. Infinity:", Infinity);
console.log("14. -Infinity:", -Infinity);
console.log("15. NaN (Not a Number):", NaN);
console.log("16. Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("17. Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

console.log("\n-------------------------------\n");
console.log("=== 3. BIGINT LITERALS ===\n");

// BigInt - for numbers larger than MAX_SAFE_INTEGER
let big = 123456789012345678901234567890n;
console.log("18. BigInt:", big);
console.log("19. typeof BigInt:", typeof big);

// BigInt operations
let bigSum = 9007199254740991n + 1n;
console.log("20. BigInt sum:", bigSum);

console.log("\n-------------------------------\n");
console.log("=== 4. BOOLEAN LITERALS ===\n");

let isActive = true;
let isDeleted = false;
console.log("21. true:", isActive);
console.log("22. false:", isDeleted);
console.log("23. 5 > 3:", 5 > 3);
console.log("24. 5 < 3:", 5 < 3);

console.log("\n-------------------------------\n");
console.log("=== 5. NULL LITERAL ===\n");

let emptyValue = null;
console.log("25. null:", emptyValue);
console.log("26. typeof null:", typeof null); // "object" (known quirk)

console.log("\n-------------------------------\n");
console.log("=== 6. UNDEFINED ===\n");

let notAssigned;
console.log("27. undefined (unassigned):", notAssigned);
console.log("28. typeof undefined:", typeof undefined);

console.log("\n-------------------------------\n");
console.log("=== 7. ARRAY LITERALS ===\n");

// Simple array
let fruits = ["apple", "banana", "orange"];
console.log("29. Simple array:", fruits);

// Mixed types
let mixed = [1, "two", true, null, undefined, { a: 1 }];
console.log("30. Mixed array:", mixed);

// Nested arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("31. Nested array (matrix):", matrix);

// Sparse array (has holes)
let sparse = [1, , 3, , ];
console.log("32. Sparse array:", sparse);
console.log("33. Sparse array length:", sparse.length);

// Array with computed keys (spread, etc.)
let expanded = [0, ...[1, 2, 3], 4];
console.log("34. Spread in array:", expanded);

console.log("\n-------------------------------\n");
console.log("=== 8. OBJECT LITERALS ===\n");

// Simple object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log("35. Simple object:", person);

// Object with computed property names - ES6
let propName = "score";
let game = {
    player: "Alice",
    [propName]: 100,
    ["level" + 2]: "advanced"
};
console.log("36. Computed property names:", game);

// Shorthand property names - ES6
let x = 10, y = 20;
let point = { x, y };
console.log("37. Shorthand properties:", point);

// Object with methods
let calculator = {
    a: 5,
    b: 3,
    add() {
        return this.a + this.b;
    },
    multiply: function () {
        return this.a * this.b;
    }
};
console.log("38. Object methods:", calculator.add(), "and", calculator.multiply());

// Nested objects
let company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};
console.log("39. Nested object:", company);

// Object with spread - ES9
let defaults = { theme: "light", lang: "en" };
let settings = { ...defaults, theme: "dark" };
console.log("40. Spread in object:", settings);

// Object with getters/setters
let tempObj = {
    _temp: 25,
    get celsius() {
        return this._temp;
    },
    set celsius(val) {
        this._temp = val;
    }
};
console.log("41. Getter:", tempObj.celsius);

console.log("\n-------------------------------\n");
console.log("=== 9. REGEXP LITERALS ===\n");

// Simple regex literal
let pattern1 = /hello/;
console.log("42. Simple regex test:", pattern1.test("hello world"));

// Regex with flags
let pattern2 = /HELLO/i;  // i = case-insensitive
console.log("43. Case-insensitive regex:", pattern2.test("hello world"));

// Regex with global and multiline flags
let pattern3 = /^start/gm;
console.log("44. Multiline regex:", pattern3.test("start here\nstart again"));

// Regex with character classes
let digitPattern = /\d+/;
console.log("45. Digit regex:", digitPattern.test("abc123"));

// Regex with groups
let emailPattern = /(\w+)@(\w+\.\w+)/;
let match = "user@example.com".match(emailPattern);
console.log("46. Regex groups:", match);

console.log("\n-------------------------------\n");
console.log("=== 10. SYMBOL LITERALS ===\n");

// Simple symbol
let sym1 = Symbol("description");
console.log("47. Symbol:", sym1);
console.log("48. typeof Symbol:", typeof sym1);

// Symbols are always unique
let symA = Symbol("id");
let symB = Symbol("id");
console.log("49. Symbols with same description are different:", symA === symB);

// Well-known symbols
let obj = {
    [Symbol.toStringTag]: "MyCustomObject"
};
console.log("50. Well-known Symbol.toStringTag:", Object.prototype.toString.call(obj));

// Symbol.for - creates global symbol registry
let globalSym = Symbol.for("app.id");
let sameGlobalSym = Symbol.for("app.id");
console.log("51. Symbol.for creates same symbol:", globalSym === sameGlobalSym);
console.log("52. Symbol.keyFor:", Symbol.keyFor(globalSym));

console.log("\n-------------------------------\n");
console.log("=== 11. TEMPLATE LITERALS (Tagged) ===\n");

// Tagged template literal
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let val = values[i] ? `[${values[i]}]` : '';
        return result + str + val;
    }, '');
}

let item = "apple";
let price = 50;
console.log("53. Tagged template:", highlight`Buy ${item} for ${price} rupees`);

// Raw strings
let filePath = String.raw`C:\Users\Name\file.txt`;
console.log("54. String.raw:", filePath);

console.log("\n-------------------------------\n");
console.log("=== 12. ADVANCED / MODERN LITERALS ===\n");

// Destructuring in array literals (from expressions)
let [a, b] = [10, 20];
console.log("55. Array destructuring:", a, b);

// Destructuring in object literals (from expressions)
let { firstName, age } = { firstName: "John", age: 30 };
console.log("56. Object destructuring:", firstName, age);

// Nullish coalescing in object defaults
let config = { timeout: 0 };
let timeout = config.timeout ?? 5000;
console.log("57. Nullish coalescing:", timeout);

// Optional chaining with literals
let user = { profile: { name: "Raj" } };
console.log("58. Optional chaining:", user?.profile?.name);
console.log("59. Optional chaining missing:", user?.settings?.theme);

// BigInt in object literals
let bigObj = { value: 9007199254740993n };
console.log("60. BigInt in object:", bigObj);

console.log("\n-------------------------------\n");
console.log("=== SUMMARY ===");
console.log("JavaScript supports these literal types:");
console.log("1. String literals       - '...'  \"...\"  `...`");
console.log("2. Number literals       - 42  3.14  0xff  0b1010  0o77  1e3");
console.log("3. BigInt literals       - 123n");
console.log("4. Boolean literals      - true  false");
console.log("5. Null literal          - null");
console.log("6. Undefined             - undefined");
console.log("7. Array literals        - [1, 2, 3]");
console.log("8. Object literals       - { a: 1 }");
console.log("9. RegExp literals       - /pattern/flags");
console.log("10. Symbol literals      - Symbol('desc')");
console.log("11. Template literals    - `hello ${name}`");
console.log("12. Tagged templates     - tag`hello ${name}`");
console.log("\nModern additions: computed props, shorthand, spread, destructuring, ??, ?.");
