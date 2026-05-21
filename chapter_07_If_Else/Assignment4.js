// Question 4 — Build Health Reporter

// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

// Sample Input/Output:

// Input: 95
// Output: 🟡 Stable — Investigate failures

// Input: 65
// Output: 🔴 Broken Build — Block deployment

let percentage = 70;
if (percentage < 0 || percentage > 100) {
    console.log("Invalid Percentage")
} else if (percentage === 100) {
    console.log("Green Build")
} else if (percentage >= 90 && percentage <= 99) {
    console.log("🟡 Stable — Investigate failures")
} else if (percentage >= 70 && percentage <= 89) {
    console.log("Unstable")
} else {
    console.log("🔴 Broken Build — Block deployment")
}