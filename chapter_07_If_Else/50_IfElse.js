let isLoggedIn = true;
let userRole = "read-only";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("all access");
    }
    else if (userRole === "editor") {
        console.log("Edit access");
    }
    else if (userRole === "read-only") {
        console.log("Read access");
    }
    else {
        console.log("Guest!!!")
    }
}
else {
    console.log("User not logged in.")
}