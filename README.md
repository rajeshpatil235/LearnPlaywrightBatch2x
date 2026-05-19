# LearnPlaywrightBatch2x

> A beginner-friendly JavaScript learning project covering JS basics, identifiers, literals, and preparing for Playwright automation testing.

---

## 📚 About This Project

This repository contains code examples and exercises from a JavaScript & Playwright learning batch. It is organized into chapters, starting from the very basics and moving towards core JavaScript concepts needed for Playwright test automation.

---

## 🗂️ Project Structure

```
LearnPlaywrightBatch2x/
│
├── chapter_01_Basics/              # JavaScript Basics
│   ├── 01_Basics.js                # Hello World & console.log
│   ├── 02_JS.js                    # Variables, loops & functions
│   ├── 03_Commands.js              # Basic commands & concepts
│   └── 04_HotCode.js               # Hot code / quick examples
│
├── chapter_02_JavaScript_Basics/   # JavaScript Basics
│   ├── 05_JS_Basics.js             # JS Basics recap
│   └── VS_Code_Keyboard_shortcuts.md # VS Code shortcuts reference
│
├── chapter_04_Scope_Function_Hoisting_TDZ/ # Variables, Functions, Scope & Hoisting
│   ├── 09_var_let_const.js         # var vs let vs const overview
│   ├── 10_functions.js             # Functions basics
│   ├── 11_var_explained.js         # var deep dive
│   ├── 12_let_explained.js         # let deep dive
│   ├── 14_var_functionScope.js     # Function scope with var
│   ├── 15_let_blockScope.js        # Block scope with let
│   ├── 16_hoisting.js              # Hoisting basics
│   ├── 17_hoisting_function.js     # Function hoisting
│   ├── 18_let_hoisting.js          # let hoisting behavior
│   ├── 19_let_hoisting_block.js    # let hoisting in blocks
│   ├── 20_let_const_hoisting.js    # let & const hoisting comparison
│   └── 21_jr_qa.js                 # Junior QA concepts
│
├── chapter_05_Literals/            # All JavaScript Literals
│   ├── 22_Literal.js               # Literal basics
│   ├── 23_null_vs_undefined.js     # null vs undefined deep dive
│   ├── 24_null.js                  # null literal examples
│   ├── 25_Literal_All.js           # All literals overview
│   ├── 26_All_Literals.js          # Comprehensive literals guide (60 examples)
│   ├── 27_Quotes_Strings.js        # Single, double, backtick comparison
│   ├── 28_Template_Literals.js     # Template literals with interpolation
│   └── 29_String_Methods.js        # String methods & quotes comparison
│
├── chapter_06_Operator/              # Operators
│   ├── 30_Operator.js                      # Operator basics
│   ├── 31_Arithmetic_Operator.js           # Arithmetic operators
│   ├── 32_Modulus_Operator.js              # Modulus operator
│   ├── 33_Expo_Operator.js                 # Exponentiation operator
│   ├── 34_InterviewQ.js                    # Interview questions
│   ├── 35_Comparison_Operator.js           # Comparison operators (<, >, ==, ===)
│   ├── 36_Loose_Strict_Comparison.js       # Loose (==) vs Strict (===) comparison
│   ├── 37_Loose_Vs_Strict.js               # Edge cases in loose comparison
│   ├── 38_Confusing_Comparison.js          # Confusing == and === cases
│   ├── 39_Logical_Operator.js              # Logical operators (&&, ||, !)
│   ├── 40_String_Concatenation.js          # String concatenation
│   ├── 41_Ternary_Operator.js              # Ternary operator examples
│   ├── 42_Type_Operator.js                 # typeof operator
│   ├── 43_Null_Operator.js               # Nullish coalescing operator
│   ├── 44_PreIncrement_Operator.js       # Pre-increment operator
│   ├── 45_PostIncrement_Operator.js      # Post-increment operator
│   ├── 46_Interview_Incre.js               # Interview questions on increment
│   ├── 47_Advanced_Incre.js                # Advanced increment/decrement
│   ├── 47_Assignment_Ternary1_js           # Assignment: Ternary part 1
│   ├── 47_Assignment_Ternary2.js           # Assignment: Ternary part 2
│   └── 48_Assignment_Incre_decre1.js       # Assignment: Increment/Decrement
│
└── (More chapters coming soon...)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [VS Code](https://code.visualstudio.com/) (recommended)

### Running the Code

To run any `.js` file, use Node.js from your terminal:

```bash
# Example: run a specific file
node chapter_01_Basics/01_Basics.js
node chapter_02_Identifier_Literals/07_Identifier_Part2.js
node chapter_05_Literals/23_null_vs_undefined.js
node chapter_05_Literals/26_All_Literals.js
node chapter_05_Literals/29_String_Methods.js
node chapter_06_Operator/38_Confusing_Comparison.js
node chapter_06_Operator/41_Ternary_Operator.js
node chapter_06_Operator/42_Type_Operator.js
node chapter_06_Operator/43_Null_Operator.js
node chapter_06_Operator/44_PreIncrement_Operator.js
node chapter_06_Operator/45_PostIncrement_Operator.js
```

---

## 📖 Topics Covered

### Chapter 1: Basics
- `console.log()` and printing output
- Variables (`let`, `var`)
- Loops (`for` loop)
- Functions

### Chapter 2: JavaScript Basics
- JS Basics recap
- VS Code keyboard shortcuts for Windows

### Chapter 4: JavaScript Basics (Variables, Functions, Scope & Hoisting)
- `var`, `let`, and `const` differences
- Function declarations and basics
- Deep dive into `var` (function scope, redeclaration)
- Deep dive into `let` (block scope, temporal dead zone)
- Deep dive into `const` (block scope, immutability)
- Function scope vs Block scope
- Hoisting of variables and functions

### Chapter 5: Literals
- What are literals in JavaScript
- String literals: single quotes `'...'`, double quotes `"..."`, backticks `` `...` ``
- Number literals: integers, floats, hex, binary, octal, exponential
- BigInt literals for large numbers
- Boolean literals (`true`, `false`)
- `null` vs `undefined` — differences, equality, practical examples
- Array literals and nested arrays
- Object literals, computed properties, shorthand, spread
- RegExp literals (`/pattern/flags`)
- Symbol literals (`Symbol()`)
- Template literals with interpolation `${variable}`
- Tagged template literals
- String methods: `slice`, `split`, `replace`, `trim`, `padStart`, `includes`, etc.

### Chapter 6: Operators
- Arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`)
- Comparison operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`)
- Loose comparison (`==`) with type coercion
- Strict comparison (`===`) without type coercion
- Confusing comparison cases: `[] == ![]`, `NaN == NaN`, `null == undefined`, etc.
- `Object.is()` vs `===` for edge cases (`NaN`, `-0`)
- Logical operators (`&&`, `||`, `!`)
- String concatenation with `+` and `+=`
- Ternary operator (`condition ? true : false`) and nested ternary
- `typeof` operator for type checking
- Nullish coalescing operator (`??`)
- Pre-increment (`++x`) and Post-increment (`x++`)
- Pre-decrement (`--x`) and Post-decrement (`x--`)
- Interview questions on increment/decrement

### Coming Up Next
- Data Types
- Control Flow
- Arrays & Objects
- Introduction to Playwright

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **Node.js** - for running JS files
- **VS Code** - recommended code editor

---

## 📝 VS Code Shortcuts

Check out the [VS_Code_Keyboard_shortcuts.md](chapter_02_Identifier_Literals/VS_Code_Keyboard_shortcuts.md) file for a comprehensive list of VS Code keyboard shortcuts for Windows!

---

## 🤝 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/rajeshpatil235/LearnPlaywrightBatch2x.git
   ```

2. Navigate into the folder:
   ```bash
   cd LearnPlaywrightBatch2x
   ```

3. Run any example file:
   ```bash
   node chapter_01_Basics/01_Basics.js
   ```

---

## 📌 Key Takeaways

> JavaScript identifiers:
> - Can start with a letter, `_`, or `$`
> - Cannot start with a number
> - Cannot contain spaces or special characters (except `_` and `$`)
> - Are case-sensitive (`name` ≠ `Name`)
> - Cannot be reserved keywords

---

## 👤 Author

- **Rajesh Patil**
- GitHub: [@rajeshpatil235](https://github.com/rajeshpatil235)

---

*Happy Learning! Keep coding and keep growing.*
