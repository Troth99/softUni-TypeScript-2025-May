"use strict";
function optionalMultiplier(num1, num2, num3) {
    if (typeof num1 === "string") {
        num1 = Number(num1);
    }
    if (typeof num2 === "string") {
        num2 = Number(num2);
    }
    if (typeof num3 === "string") {
        num3 = Number(num3);
    }
    const nums = [num1, num2, num3].filter((number) => number !== undefined);
    if (nums.length === 0)
        return 1;
    let result = nums.reduce((acc, val) => acc * val, 1);
    return result;
}
console.log(optionalMultiplier(7, undefined, '2'));
//# sourceMappingURL=optionalMultiplier.js.map