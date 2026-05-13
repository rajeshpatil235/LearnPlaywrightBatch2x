// ============================================
// 29 - Single Quote vs Double Quote vs Backtick
// ============================================

console.log("=== 1. BASIC DECLARATION ===\n");

// Single quote
let single = 'Hello World';
console.log("1. Single quote:", single);

// Double quote
let double = "Hello World";
console.log("2. Double quote:", double);

// Backtick (template literal)
let backtick = `Hello World`;
console.log("3. Backtick:", backtick);

console.log("\n→ All three produce the SAME string value!");
console.log("→ 'Hello' === \"Hello\" === `Hello` →", 'Hello' === "Hello" && "Hello" === `Hello`);


console.log("\n-------------------------------\n");
console.log("=== 2. WHEN TO USE SINGLE QUOTES ===\n");

// Best when your string contains double quotes
let htmlAttr = '<div class="container">Content</div>';
console.log("4. Single quotes wrapping double quotes:", htmlAttr);

// Best for simple, short strings
let status = 'Active';
console.log("5. Simple word:", status);

// If string has an apostrophe, you must ESCAPE it
let escaped = 'It\'s a sunny day';
console.log("6. Escaped apostrophe in single quotes:", escaped);


console.log("\n-------------------------------\n");
console.log("=== 3. WHEN TO USE DOUBLE QUOTES ===\n");

// Best when your string contains single quotes / apostrophes
let sentence = "It's a sunny day";
console.log("7. Double quotes wrapping single quotes:", sentence);

// Best when your string contains apostrophes
let possessive = "Rajesh's book";
console.log("8. Possessive form:", possessive);

// If string has double quotes, you must ESCAPE them
let escapedDouble = "She said, \"Hello!\"";
console.log("9. Escaped double quotes inside double quotes:", escapedDouble);


console.log("\n-------------------------------\n");
console.log("=== 4. WHEN TO USE BACKTICKS ===\n");

// 1. Variable interpolation with ${}
let name = "Rajesh";
let greeting = `Hello, ${name}!`;
console.log("10. Interpolation:", greeting);

// 2. Expression evaluation inside ${}
let price = 100;
let qty = 5;
console.log("11. Expression:", `Total: Rs.${price * qty}`);

// 3. Multi-line strings
let address = `123 Main Street
Bangalore, Karnataka
India - 560001`;
console.log("12. Multi-line string:");
console.log(address);

// 4. Can contain both single and double quotes freely
let free = `It's a "wonderful" day!`;
console.log("13. Both quotes freely:", free);


console.log("\n-------------------------------\n");
console.log("=== 5. SIDE-BY-SIDE COMPARISON ===\n");

let variable = "JavaScript";

// Single quote - NO interpolation possible
let s = 'I love ' + variable + '!';
console.log("14. Single quote + concatenation:", s);

// Double quote - NO interpolation possible
let d = "I love " + variable + "!";
console.log("15. Double quote + concatenation:", d);

// Backtick - interpolation built-in
let b = `I love ${variable}!`;
console.log("16. Backtick interpolation:", b);

console.log("\n→ All 3 results are identical:", s === d && d === b);


console.log("\n-------------------------------\n");
console.log("=== 6. NEWLINES ===\n");

// Single quotes need \n escape
let singleLine = 'Line 1\nLine 2\nLine 3';
console.log("17. Single quote newline:");
console.log(singleLine);

// Double quotes need \n escape
let doubleLine = "Line 1\nLine 2\nLine 3";
console.log("\n18. Double quote newline:");
console.log(doubleLine);

// Backticks allow real newlines
let backtickLine = `Line 1
Line 2
Line 3`;
console.log("\n19. Backtick real newline:");
console.log(backtickLine);


console.log("\n-------------------------------\n");
console.log("=== 7. ESCAPE SEQUENCES ===\n");

// All three support the same escapes
console.log("20. Single quote tab:", 'A\tB');
console.log("21. Double quote tab:", "A\tB");
console.log("22. Backtick tab:", `A\tB`);

// BUT backticks also have String.raw
let raw = String.raw`C:\Users\Rajesh\Documents\file.txt`;
console.log("23. String.raw (backtick only):", raw);


console.log("\n-------------------------------\n");
console.log("=== 8. TAGGED TEMPLATE LITERALS ===\n");

// Only backticks support tagged templates
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += str + (values[i] ? `**${values[i]}**` : '');
    });
    return result;
}

let item = "Laptop";
let cost = 50000;
console.log("24. Tagged template:", highlight`Buy ${item} for Rs.${cost}`);


console.log("\n-------------------------------\n");
console.log("=== 9. PRACTICAL SCENARIOS ===\n");

// Scenario 1: JSON string (double quotes required)
let jsonString = '{"name": "Rajesh", "city": "Bangalore"}';
console.log("25. JSON uses double quotes:", jsonString);

// Scenario 2: HTML string with attributes
let htmlSingle = '<button class="btn" id="submit">Click</button>';
console.log("26. HTML in single quotes:", htmlSingle);

let htmlDouble = "<button class='btn' id='submit'>Click</button>";
console.log("27. HTML in double quotes:", htmlDouble);

// Scenario 3: Dynamic URL
let env = "prod";
let userId = "u123";
let url = `https://api-${env}.example.com/users/${userId}`;
console.log("28. Dynamic URL with backtick:", url);

// Scenario 4: SQL-like query string
let table = "employees";
let query = `SELECT * FROM ${table} WHERE status = 'Active'`;
console.log("29. Dynamic query with backtick:", query);

// Scenario 5: Multi-line message
let emailBody = `Hi ${name},

Your order has been placed successfully.
Total amount: Rs.${price * qty}

Thank you!`;
console.log("30. Multi-line email:");
console.log(emailBody);


console.log("\n-------------------------------\n");
console.log("=== 10. QUICK REFERENCE ===\n");

console.log("┌──────────────────────┬────────────────────────────────────────┐");
console.log("│ Feature              │ Single    Double    Backtick           │");
console.log("├──────────────────────┼────────────────────────────────────────┤");
console.log("│ Basic strings        │    ✓         ✓         ✓               │");
console.log("│ Contains ' quotes    │    ✗         ✓         ✓               │");
console.log("│ Contains \" quotes    │    ✓         ✗         ✓               │");
console.log("│ Variable ${x}        │    ✗         ✗         ✓               │");
console.log("│ Multi-line           │    ✗         ✗         ✓               │");
console.log("│ Tagged templates     │    ✗         ✗         ✓               │");
console.log("│ String.raw           │    ✗         ✗         ✓               │");
console.log("└──────────────────────┴────────────────────────────────────────┘");

console.log("\n=== SUMMARY ===");
console.log("'single quotes'  → Use when string has double quotes, or simple text");
console.log('"double quotes"  → Use when string has single quotes/apostrophes');
console.log("`backticks`      → Use for interpolation, multi-line, tagged templates");
console.log("\nPick the one that requires the LEAST escaping and best fits your need!");
