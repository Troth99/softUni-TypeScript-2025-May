"use strict";
function calculateEven(a, b, c) {
    let result;
    let sum = 0;
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        sum = a + b + c;
    }
    if (sum % 2 === 0) {
        return (result = "true");
    }
    else {
        return (result = "false");
    }
}
console.log(calculateEven(1, 2, 3));
//# sourceMappingURL=evenSum.js.map