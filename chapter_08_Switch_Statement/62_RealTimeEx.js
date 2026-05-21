let responseCode = 501;

switch (responseCode) {
    case 200:
        console.log("OK");
        break;
    case 400:
        console.log("NOT FOUND");
        break;
    case 500:
        console.log("INTERNAL SERVER ERROR");
        break;
    default:
        console.log("No match...!!!")
}