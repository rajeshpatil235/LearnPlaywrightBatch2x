// 07_Identifier_Part2.js - JavaScript Identifier Examples with Rules

// ============================================================
// VALID IDENTIFIER EXAMPLES
// ============================================================

// 1. Starting with a letter (a-z, A-Z)
var name = "Rajesh";           // eg: simple variable name
var firstName = "Rajesh";      // eg: camelCase (recommended for JS)
var lastName = "Patil";        // eg: camelCase
var UserName = "Admin";        // eg: PascalCase (starts with uppercase)

// 2. Starting with underscore (_)
var _privateVar = "hidden";    // eg: convention for private/internal variables
var _score = 100;              // eg: underscore prefix

// 3. Starting with dollar sign ($)
var $element = "div";          // eg: often used for DOM elements or jQuery
var $price = 99.99;            // eg: dollar prefix

// 4. Containing digits (0-9) but NOT starting with them
var user1 = "Alice";           // eg: letter followed by number
var item2 = "Book";            // eg: number at the end
var total_score = 500;         // eg: snake_case (underscore between words)

// 5. ALL CAPS for constants
var MAX_SIZE = 100;            // eg: constant naming convention
var PI = 3.14159;              // eg: constant value
var API_KEY = "abc123";        // eg: constant for configuration

// 6. Case-sensitive examples
var myVar = "lowercase";
var MyVar = "uppercase";       // eg: myVar and MyVar are DIFFERENT identifiers
var MYVAR = "all caps";        // eg: all three are different variables

console.log("Valid Identifiers:");
console.log("name:", name);
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("_privateVar:", _privateVar);
console.log("$element:", $element);
console.log("user1:", user1);
console.log("total_score:", total_score);
console.log("MAX_SIZE:", MAX_SIZE);

console.log("\nCase-Sensitive Test:");
console.log("myVar:", myVar);
console.log("MyVar:", MyVar);
console.log("MYVAR:", MYVAR);

// ============================================================
// INVALID IDENTIFIER EXAMPLES (Commented out to prevent errors)
// ============================================================

/*
// 1. Cannot start with a number
var 1stPlace = "Gold";          // ❌ Invalid: starts with digit
var 2user = "Tom";              // ❌ Invalid: starts with digit

// 2. Cannot contain spaces
var my var = "hello";           // ❌ Invalid: space not allowed
var first name = "Raj";         // ❌ Invalid: space not allowed

// 3. Cannot contain hyphens
var my-var = "test";            // ❌ Invalid: hyphen not allowed (treated as subtraction)
var first-name = "Raj";         // ❌ Invalid: hyphen not allowed

// 4. Cannot use reserved keywords
var let = "value";              // ❌ Invalid: 'let' is a reserved keyword
var class = "CS101";            // ❌ Invalid: 'class' is a reserved keyword
var return = "result";          // ❌ Invalid: 'return' is a reserved keyword
var if = "condition";           // ❌ Invalid: 'if' is a reserved keyword
var function = "test";          // ❌ Invalid: 'function' is a reserved keyword
var const = 10;                 // ❌ Invalid: 'const' is a reserved keyword

// 5. Cannot use special characters (except _ and $)
var @email = "test@example.com"; // ❌ Invalid: @ not allowed
var #tag = "javascript";         // ❌ Invalid: # not allowed
var user% = "name";              // ❌ Invalid: % not allowed
var price! = 50;                 // ❌ Invalid: ! not allowed
var data& = "info";              // ❌ Invalid: & not allowed

// 6. Case sensitivity confusion
// The following would create NEW variables, not reference existing ones:
// myvar = "wrong";               // Different from myVar
// my_Var = "wrong";              // Different from myVar
*/

// ============================================================
// BEST PRACTICES FOR IDENTIFIERS
// ============================================================

// ✅ Use camelCase for regular variables
var userName = "Rajesh";         // eg: recommended JS style
var totalAmount = 250.50;        // eg: descriptive camelCase

// ✅ Use UPPER_CASE for constants
var MAX_USERS = 100;             // eg: configuration constant
var DEFAULT_TIMEOUT = 3000;      // eg: constant value

// ✅ Use meaningful/descriptive names
var a = "bad";                   // ❌ Not recommended: unclear
var userEmail = "good";          // ✅ Recommended: descriptive

// ✅ Start with letter or underscore for private
var _internalCounter = 0;        // eg: indicates internal use

console.log("\nBest Practice Examples:");
console.log("userName:", userName);
console.log("totalAmount:", totalAmount);
console.log("MAX_USERS:", MAX_USERS);
console.log("userEmail:", userEmail);

// ============================================================
// IDENTIFIER RULES SUMMARY
// ============================================================
/*
Rule 1: Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
Rule 2: Can contain letters, digits (0-9), underscores, or dollar signs
Rule 3: Cannot start with a digit (0-9)
Rule 4: Cannot contain spaces
Rule 5: Cannot contain special characters except _ and $
Rule 6: Cannot be a reserved keyword (var, let, const, function, class, etc.)
Rule 7: JavaScript identifiers are case-sensitive
*/
