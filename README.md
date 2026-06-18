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
│   └── 47_Assignment_Incre_decre1.js       # Assignment: Increment/Decrement
│
├── chapter_07_If_Else/               # If-Else Statements
│   ├── 48_IfElse.js                      # If-Else basics
│   ├── 49_IfElse.js                      # If-Else examples
│   ├── 50_IfElse.js                      # Nested If-Else
│   ├── 51_IfElse.js                      # If-Else practice
│   ├── 52_IQ.js                          # Interview questions
│   ├── 53_IfElse.js                      # Advanced If-Else
│   ├── 54_IQ.js                          # More interview questions
│   ├── 55_If.js                          # If statement only
│   ├── 56_Even_Odd.js                    # Even/Odd checker
│   ├── 57_Grade_Calc.js                  # Grade calculator
│   ├── 58_Leap_Year.js                   # Leap year checker
│   └── Assignment1.js to Assignment5.js  # If-Else assignments
│
├── chapter_08_Switch_Statement/      # Switch Statements
│   ├── 59_Switch.js                      # Switch basics
│   ├── 60_No_Break.js                    # Switch without break
│   ├── 61_Default.js                     # Default case
│   ├── 62_RealTimeEx.js                  # Real-time examples
│   ├── 63_Switch_Group.js                # Grouped cases
│   └── 64_IQ1.js to 67_IQ4.js           # Interview questions
│
├── chapter_09_User_Input/            # User Input in Node.js
│   ├── 68_UserInput.js                   # User input basics
│   ├── 69_Node_ReadLine.js               # Using readline module
│   └── 70_Prompt_Sync.js               # Using prompt-sync package
│
├── chapter_10_Loops/                   # Loops in JavaScript
│   ├── 71_For1.js                        # For loop basics
│   ├── 72_For2.js                        # For loop examples
│   ├── 73_For3.js                        # For loop patterns
│   ├── 74_IQ.js                          # Interview questions
│   ├── 75_For_Of_In_Each.js              # for...of, for...in, forEach
│   ├── 76_While.js                       # While loop
│   ├── 77_DoWhile1.js                    # Do-While loop basics
│   ├── 78_DoWhile2.js                    # Do-While loop examples
│   ├── 79_IQ1.js to 82_IQ4.js            # Interview questions
│   └── Assignment1.js to Assignment2.js  # Loop assignments
│
├── chapter_11_Arrays/                  # Arrays in JavaScript
│   ├── 83_Array1.js                        # Array basics
│   ├── 84_Array2.js                        # Array creation & types
│   ├── 85_AccessingArray.js                # Accessing elements
│   ├── 86_ArrayAddRemove.js                # Adding & removing elements
│   ├── 87_AddRemove.js                     # Add/remove methods deep dive
│   ├── 88_RealTimeEx.js                    # Real-time examples
│   ├── 89_Searching.js                     # Searching methods (indexOf, includes, find)
│   ├── 90_Iterate.js                       # Iteration methods (map, filter, reduce)
    │   ├── 91_Transform_Array.js               # Transforming arrays
    │   ├── 92_Array3_Sorting.js                # Sorting arrays
    │   ├── 93_Array_Slice.js                   # Slicing arrays
    │   ├── 94_Concat_Join.js                   # Concat & Join methods
    │   └── 95_ArrayCheck.js                    # Array checking methods
    │
    ├── chapter_12_Function/                # Functions in JavaScript
    │   ├── 96_Functions.js                     # Function basics
    │   ├── 97_Type1_NoParam_NoReturn.js        # Functions with no params, no return
    │   ├── 98_Type2_Param_NoReturn.js          # Functions with params, no return
    │   ├── 99_Type3_NoParam_Return.js          # Functions with no params, with return
    │   ├── 100_Type4_Param_Return.js           # Functions with params and return
    │   ├── 101_TemplateLiteral_InFunction.js   # Template literals in functions
    │   ├── 102_FunctionAsAnExpression.js       # Function expressions
    │   └── 103_ArrowFunction.js                # Arrow functions
    │
    │
    ├── chapter_13_Strings/                 # Strings in JavaScript
    │   ├── 104_StringBasics.js                 # String basics
    │   ├── 105_StringMethods.js                # Common string methods
    │   ├── 106_StringSearch.js                 # Searching in strings
    │   ├── 107_StringExtract.js                # Extracting substrings
    │   ├── 108_StringReplace.js                # Replacing string content
    │   ├── 109_StringCase.js                   # Case conversion methods
    │   ├── 110_StringTrim.js                   # Trimming whitespace
    │   ├── 111_StringPad.js                    # Padding strings
    │   ├── 112_StringSplit.js                  # Splitting strings
    │   ├── 113_TemplateLiterals.js             # Template literals deep dive
    │   ├── 114_StringImmutability.js           # String immutability
    │   ├── 115_StringInterview.js              # String interview questions
    │   ├── 116_StringExercises.js              # String practice exercises
    │   └── 117_Palindrome.js                   # Palindrome checker exercise
    │
    ├── chapter_14_Objects/                 # Objects in JavaScript
    │   ├── 124_Objects.js                      # Object basics
    │   ├── 125_Objects.js                      # Object properties
    │   ├── 126_ObjectCreation.js               # Creating objects
    │   ├── 127_ObjectsReal.js                  # Real-world object examples
    │   ├── 128_PrimitiveRf.js                  # Primitive vs Reference types
    │   ├── 129_ObjectsExamples.js              # Object examples
    │   ├── 130_IQ1.js                          # Interview questions 1
    │   ├── 131_ObjectFunction.js               # Object methods
    │   ├── 132_ObjectDeconstruction.js         # Object destructuring
    │   ├── 133_Spread.js                       # Spread operator with objects
    │   ├── 134_GetSetMethod.js                 # Getters and setters
    │   ├── 135_IQ2.js                          # Interview questions 2
    │   ├── 136_ObjectsReal.js                  # More real examples
    │   └── 137_let_const_objects.js            # let/const with objects
    │
    ├── chapter_15_2D_Arrays/               # 2D Arrays / Matrices
    │   ├── 138_2D_Array.js                     # 2D array basics
    │   ├── 139_2D.js                           # 2D array operations
    │   ├── 140_RealExample.js                  # Real-world 2D array examples
    │   ├── 141_2D.js                           # Matrix operations
    │   ├── 142_IQ_Right_Triangle_Pattern.js    # Pattern printing exercise
    │   └── Assignment_Reverse_RightTriangle.js # Reverse triangle assignment
    │
    ├── chapter_16_Callback/                # Callback Functions
    │   ├── 143_Callback.js                     # Callback basics
    │   ├── 144_CB.js                           # Callback patterns
    │   ├── 145_CallbackFunction.js             # Callback functions deep dive
    │   ├── 146_PlaywrightCallback.js           # Callbacks in Playwright context
    │   ├── 147_JS_CB.js                        # JavaScript callbacks
    │   ├── 148_Sync_CB.js                      # Synchronous callbacks
    │   ├── 149_Async_CB.js                     # Asynchronous callbacks
    │   ├── 150_CB_Hell.js                      # Callback hell problem
    │   ├── 151_CB_Hell_20TestCases.js          # Callback hell with test cases
    │   ├── 152_CB_Parameter.js                 # Callbacks as parameters
    │   └── 153_CB_Return.js                    # Returning callbacks
    │
    └── chapter_17_Promises/                # JavaScript Promises
        ├── 154_Promise.js                      # Promise basics
        ├── 155_Promise_RealEx1.js              # Real Promise example 1
        ├── 156_PromiseRealEx2.js               # Real Promise example 2
        ├── 157_Finally.js                      # Promise.finally()
        ├── 158_CallBackHellPyramidProblem.js   # Solving callback hell
        ├── 159_PromiseAll.js                   # Promise.all()
        └── 160_PromiseIQ.js                    # Promise interview questions
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

# Chapter 7: If-Else
node chapter_07_If_Else/48_IfElse.js
node chapter_07_If_Else/56_Even_Odd.js
node chapter_07_If_Else/57_Grade_Calc.js
node chapter_07_If_Else/58_Leap_Year.js

# Chapter 8: Switch Statement
node chapter_08_Switch_Statement/59_Switch.js
node chapter_08_Switch_Statement/62_RealTimeEx.js

# Chapter 9: User Input
node chapter_09_User_Input/68_UserInput.js
node chapter_09_User_Input/69_Node_ReadLine.js
node chapter_09_User_Input/70_Prompt_Sync.js

# Chapter 10: Loops
node chapter_10_Loops/71_For1.js
node chapter_10_Loops/72_For2.js
node chapter_10_Loops/73_For3.js
node chapter_10_Loops/74_IQ.js
node chapter_10_Loops/75_For_Of_In_Each.js
node chapter_10_Loops/76_While.js
node chapter_10_Loops/77_DoWhile1.js
node chapter_10_Loops/78_DoWhile2.js
node chapter_10_Loops/79_IQ1.js
node chapter_10_Loops/80_IQ2.js
node chapter_10_Loops/81_IQ3.js
node chapter_10_Loops/82_IQ4.js
node chapter_10_Loops/Assignment1.js
node chapter_10_Loops/Assignment2.js

# Chapter 11: Arrays
node chapter_11_Arrays/83_Array1.js
node chapter_11_Arrays/84_Array2.js
node chapter_11_Arrays/85_AccessingArray.js
node chapter_11_Arrays/86_ArrayAddRemove.js
node chapter_11_Arrays/87_AddRemove.js
node chapter_11_Arrays/88_RealTimeEx.js
node chapter_11_Arrays/89_Searching.js
node chapter_11_Arrays/90_Iterate.js
node chapter_11_Arrays/91_Transform_Array.js
node chapter_11_Arrays/92_Array3_Sorting.js
node chapter_11_Arrays/93_Array_Slice.js
node chapter_11_Arrays/94_Concat_Join.js
node chapter_11_Arrays/95_ArrayCheck.js

# Chapter 12: Functions
node chapter_12_Function/96_Functions.js
node chapter_12_Function/97_Type1_NoParam_NoReturn.js
node chapter_12_Function/98_Type2_Param_NoReturn.js
node chapter_12_Function/99_Type3_NoParam_Return.js
node chapter_12_Function/100_Type4_Param_Return.js
node chapter_12_Function/101_TemplateLiteral_InFunction.js
node chapter_12_Function/102_FunctionAsAnExpression.js
node chapter_12_Function/103_ArrowFunction.js

# Chapter 13: Strings
node chapter_13_Strings/104_StringBasics.js
node chapter_13_Strings/105_StringMethods.js
node chapter_13_Strings/106_StringSearch.js
node chapter_13_Strings/107_StringExtract.js
node chapter_13_Strings/108_StringReplace.js
node chapter_13_Strings/109_StringCase.js
node chapter_13_Strings/110_StringTrim.js
node chapter_13_Strings/111_StringPad.js
node chapter_13_Strings/112_StringSplit.js
node chapter_13_Strings/113_TemplateLiterals.js
node chapter_13_Strings/114_StringImmutability.js
node chapter_13_Strings/115_StringInterview.js
node chapter_13_Strings/116_StringExercises.js
node chapter_13_Strings/117_Palindrome.js

# Chapter 14: Objects
node chapter_14_Objects/124_Objects.js
node chapter_14_Objects/125_Objects.js
node chapter_14_Objects/126_ObjectCreation.js
node chapter_14_Objects/127_ObjectsReal.js
node chapter_14_Objects/128_PrimitiveRf.js
node chapter_14_Objects/129_ObjectsExamples.js
node chapter_14_Objects/130_IQ1.js
node chapter_14_Objects/131_ObjectFunction.js
node chapter_14_Objects/132_ObjectDeconstruction.js
node chapter_14_Objects/133_Spread.js
node chapter_14_Objects/134_GetSetMethod.js
node chapter_14_Objects/135_IQ2.js
node chapter_14_Objects/136_ObjectsReal.js
node chapter_14_Objects/137_let_const_objects.js

# Chapter 15: 2D Arrays
node chapter_15_2D_Arrays/138_2D_Array.js
node chapter_15_2D_Arrays/139_2D.js
node chapter_15_2D_Arrays/140_RealExample.js
node chapter_15_2D_Arrays/141_2D.js
node chapter_15_2D_Arrays/142_IQ_Right_Triangle_Pattern.js
node chapter_15_2D_Arrays/Assignment_Reverse_RightTriangle.js

# Chapter 16: Callback Functions
node chapter_16_Callback/143_Callback.js
node chapter_16_Callback/144_CB.js
node chapter_16_Callback/145_CallbackFunction.js
node chapter_16_Callback/146_PlaywrightCallback.js
node chapter_16_Callback/147_JS_CB.js
node chapter_16_Callback/148_Sync_CB.js
node chapter_16_Callback/149_Async_CB.js
node chapter_16_Callback/150_CB_Hell.js
node chapter_16_Callback/151_CB_Hell_20TestCases.js
node chapter_16_Callback/152_CB_Parameter.js
node chapter_16_Callback/153_CB_Return.js

# Chapter 17: Promises
node chapter_17_Promises/154_Promise.js
node chapter_17_Promises/155_Promise_RealEx1.js
node chapter_17_Promises/156_PromiseRealEx2.js
node chapter_17_Promises/157_Finally.js
node chapter_17_Promises/158_CallBackHellPyramidProblem.js
node chapter_17_Promises/159_PromiseAll.js
node chapter_17_Promises/160_PromiseIQ.js
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

### Chapter 7: If-Else Statements
- If, else if, else statements
- Nested if-else
- Even/Odd number checker
- Grade calculator
- Leap year checker
- Common interview questions

### Chapter 8: Switch Statements
- Switch statement syntax and usage
- Fall-through behavior (no break)
- Default case handling
- Grouped cases
- Real-time examples
- Interview questions

### Chapter 9: User Input in Node.js
- Reading user input with `readline`
- Using `prompt-sync` package
- Building interactive CLI applications

### Chapter 10: Loops
- `for` loop basics and patterns
- `for...of` loop
- `for...in` loop
- `forEach` method
- `while` loop
- `do...while` loop
- Common interview questions on loops
- Loop assignments and practice problems

### Chapter 11: Arrays
- Array creation and initialization
- Accessing elements by index
- Adding and removing elements (push, pop, shift, unshift)
- Searching methods: `indexOf`, `includes`, `find`, `findIndex`
- Iteration methods: `forEach`, `map`, `filter`, `reduce`
- Transforming arrays: `sort`, `reverse`, `slice`, `splice`, `concat`
- Array sorting techniques
- `slice` and `splice` methods
- `concat` and `join` methods
- Array checking methods (`Array.isArray`)
- Real-time examples and use cases

### Chapter 12: Functions
- Function declaration and basics
- Functions with no parameters and no return value
- Functions with parameters and no return value
- Functions with no parameters and return value
- Functions with parameters and return value
- Template literals inside functions
- Function expressions
- Arrow functions

### Chapter 13: Strings
- String basics and creation
- Common string methods: `charAt`, `charCodeAt`, `at`
- String searching: `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`
- Extracting substrings: `slice`, `substring`, `substr`
- Replacing content: `replace`, `replaceAll`
- Case conversion: `toUpperCase`, `toLowerCase`
- Trimming: `trim`, `trimStart`, `trimEnd`
- Padding: `padStart`, `padEnd`
- Splitting strings: `split`
- Template literals with interpolation
- String immutability
- String interview questions and exercises
- Palindrome checker implementation

### Chapter 14: Objects
- Object basics and creation methods
- Object properties and keys
- Real-world object examples
- Primitive vs Reference types
- Object methods and `this` keyword
- Object destructuring
- Spread operator with objects
- Getters and setters
- Object interview questions
- Using `let` and `const` with objects

### Chapter 15: 2D Arrays
- 2D array basics and creation
- Matrix operations and traversal
- Real-world 2D array examples
- Pattern printing: Right triangle
- Reverse triangle patterns
- Matrix manipulation techniques

### Chapter 16: Callback Functions
- Callback function basics
- Synchronous callbacks
- Asynchronous callbacks
- Callbacks in Playwright context
- Callback hell problem
- Solving callback hell patterns
- Callbacks as parameters and return values
- Practical callback exercises

### Chapter 17: Promises
- Promise basics and states
- Creating and consuming Promises
- Real-world Promise examples
- Promise chaining
- Promise.finally() method
- Solving callback hell with Promises
- Promise.all() for parallel execution
- Promise interview questions

### Coming Up Next
- Async/Await
- Error Handling
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
