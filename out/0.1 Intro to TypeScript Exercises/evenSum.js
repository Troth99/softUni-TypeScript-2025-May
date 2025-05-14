"use strict";
function calculateEven(a, b, c) {
    let sum = 0;
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        sum = a + b + c;
    }
    if (sum % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(calculateEven(2, 2, 3));
//# sourceMappingURL=evenSum.js.map