//normal
validateStatusCode(203); //hoisted
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine.");
    }
}


const validateStatusCodeAsFunction = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine.");
    }
}
validateStatusCodeAsFunction(203);
const validateStatusCodeArrowFunction = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine.");
    }
}
validateStatusCodeArrowFunction(203);