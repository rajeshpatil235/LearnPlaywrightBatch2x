// ============================================
// 27 - Single Quote, Double Quote, and Backtick Examples
// ============================================

console.log("=== 1. SINGLE QUOTES ===\n");

// Single quotes are the most basic string literal
let msg1 = 'Hello, World!';
console.log("1. Simple single-quoted string:", msg1);

// When to use single quotes: strings that contain double quotes
let quote1 = 'She said, "Hello!"';
console.log("2. Single quotes wrapping double quotes:", quote1);

// Escaping single quotes inside single quotes
let escapeSingle = 'It\'s a beautiful day';
console.log("3. Escaped single quote:", escapeSingle);

// Simple one-liner with single quotes
let status = 'Active';
console.log("4. Single word:", status);


console.log("\n-------------------------------\n");
console.log("=== 2. DOUBLE QUOTES ===\n");

// Double quotes work exactly the same as single quotes
let msg2 = "Hello, World!";
console.log("5. Simple double-quoted string:", msg2);

// When to use double quotes: strings that contain single quotes
let quote2 = "It's a beautiful day";
console.log("6. Double quotes wrapping single quotes:", quote2);

// Escaping double quotes inside double quotes
let escapeDouble = "She said, \"Hello!\"";
console.log("7. Escaped double quotes:", escapeDouble);

// File paths or HTML often use double quotes
let htmlTag = "<div class='container'>Hello</div>";
console.log("8. HTML string with double quotes:", htmlTag);


console.log("\n-------------------------------\n");
console.log("=== 3. BACKTICKS (Template Literals) ===\n");

// Backticks allow variable interpolation with ${...}
let user = "Rajesh";
let greeting = `Hello, ${user}!`;
console.log("9. Interpolation with backticks:", greeting);

// Expressions inside ${}
let a = 10, b = 20;
console.log("10. Expression inside ${}:", `Sum of ${a} and ${b} is ${a + b}`);

// Multi-line strings (very powerful!)
let address = `123 Main Street
Bangalore, Karnataka
India - 560001`;
console.log("11. Multi-line string with backticks:");
console.log(address);

// Backticks can contain both single and double quotes freely
let mixedQuotes = `It's a "wonderful" day!`;
console.log("12. Backticks with both quote types:", mixedQuotes);

// Tagged template literal (advanced)
function emphasize(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let val = values[i] ? `**${values[i]}**` : '';
        return result + str + val;
    }, '');
}

let product = "Laptop";
let price = 55000;
console.log("13. Tagged template literal:", emphasize`Buy ${product} at just ${price} rupees`);


console.log("\n-------------------------------\n");
console.log("=== 4. COMPARISON TABLE ===\n");

let single = 'Hello';
let double = "Hello";
let backtick = `Hello`;

console.log("14. Single == Double?", single == double);       // true
console.log("15. Single === Double?", single === double);     // true (same value and type)
console.log("16. Single == Backtick?", single == backtick);   // true
console.log("17. Single === Backtick?", single === backtick); // true

// All three create the exact same string value
console.log("\n→ In JavaScript, 'Hello', \"Hello\", and `Hello` are IDENTICAL strings.");
console.log("→ The only difference is what features each syntax supports.");


console.log("\n-------------------------------\n");
console.log("=== 5. WHEN TO USE WHICH? ===\n");

// Single quotes - clean and simple
let simpleName = 'John';
console.log("18. Single quotes for simple text:", simpleName);

// Double quotes - when string has apostrophes
let sentence = "I'm learning JavaScript";
console.log("19. Double quotes for contractions:", sentence);

// Backticks - when you need interpolation or multi-line
let report = `User ${simpleName} reported: "I'm done!"`;
console.log("20. Backticks with interpolation + quotes:", report);

// Real-world example: generating a message
let item = "Book";
let qty = 3;
let total = 150;
let message = `You ordered ${qty} ${item}(s). Total: Rs.${total}`;
console.log("21. Practical backtick example:", message);


console.log("\n-------------------------------\n");
console.log("=== 6. ESCAPE SEQUENCE COMPARISON ===\n");

// All three support the same escape sequences
console.log("22. Newline in single:", 'Line1\nLine2');
console.log("23. Newline in double:", "Line1\nLine2");
console.log("24. Newline in backtick:"); console.log(`Line1
Line2`);

// But backticks are raw-friendly with String.raw
let rawPath = String.raw`C:\Users\Rajesh\Documents`;
console.log("25. String.raw with backtick:", rawPath);


console.log("\n-------------------------------\n");
console.log("=== SUMMARY ===");
console.log("'single quotes'  → Simple, clean, use when string has double quotes");
console.log('"double quotes"  → Use when string has single quotes/apostrophes');
console.log("`backticks`      → Use for: interpolation ${var}, multi-line, tagged templates");
console.log("\nAll three create the same string type. Pick based on convenience!");
