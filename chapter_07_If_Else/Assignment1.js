//HTTP Status Code Categorizer

// let responseCode = 295;

// if (responseCode >= 200 && responseCode <= 299) {
//     console.log("Sucess");
// } else if (responseCode >= 300 && responseCode <= 399) {
//     console.log("Redirection");
// } else if (responseCode >= 400 && responseCode <= 499) {
//     console.log("Client Error");
// } else if (responseCode >= 500 && responseCode <= 599) {
//     console.log("Server Error");
// } else {
//     console.log("Invalid");
// }


let responseCode = 200;

if (responseCode >= 500) {
    console.log("Server Error");
} else if (responseCode >= 400) {
    console.log("Client Error");
} else if (responseCode >= 300) {
    console.log("Redirection");
} else if (responseCode >= 200) {
    console.log("Success");
} else {
    console.log("Invalid");
}