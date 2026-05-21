let browser = "chrome";

switch (browser) {
    case "chrome":
    case "edge":
    case "opera":
    case "brave":
        console.log("Chromium Engine.");
        break;
    case "firefox":
        console.log("Mozilla Engine.");
        break;
    case "safari":
        console.log("Apple Engine.")
default:
    console.log("No idea")
}