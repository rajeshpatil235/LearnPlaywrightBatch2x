// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
//inclues
console.log(url.includes("staging"));
console.log(url.includes("production"));
//startsWith endsWith 
console.log(url.startsWith("https"));
console.log(url.startsWith("http:"));
console.log(url.endsWith("true"));
console.log(url.endsWith("tru"));
// indexOf / lastIndexOf -- ➡️ Use when searching for a fixed string.
console.log(url.indexOf("a")); //first occurence of a character in a string
console.log(url.lastIndexOf("a")); //first occurence of a character in a string from last 
console.log(url.indexOf(/vwo/)); //-1 // because indexOf() cannot search using a regular expression.
console.log(url.indexOf("x"));
console.log(url.indexOf("rajesh"));
// Yes, both indexOf() and lastIndexOf() return the starting index of the match, 
// i.e., the position where "vwo" begins (the letter v).
// Because "vwo" appears only once in the string.
console.log(url.indexOf("vwo")); // 16 it will take index of starting character only
console.log(url.lastIndexOf("vwo")); //16 it will take index of starting character only
//If vwo is present twice:
let str = "vwo testing vwo automation";
console.log(str.indexOf("vwo")); // 0 it will take index of starting character only
console.log(str.lastIndexOf("vwo")); // 12 it will take index of starting character only

if (url.indexOf("vwo") !== -1) {
    console.log("found");

}
//search() -- ➡️ Use when you need regex features such as:
// The search() method searches a string using a regular expression (RegExp) 
// and returns the index of the first match.
//Using regex pattern 
// A Regular Expression (Regex or RegExp) is a pattern used to search, 
// match, validate, or replace text in a string.
// More powerful for pattern matching.
console.log(url.search(/login/)); //28
console.log(url.search(/vwo/)); // 16
console.log(url.search(/rajesh/)); // -1









