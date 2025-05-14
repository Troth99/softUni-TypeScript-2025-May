"use strict";
function convertingArrays(arrayOfStr) {
    let concatName = '';
    arrayOfStr.forEach(el => {
        concatName += el;
    });
    return [`${concatName}`, concatName.length];
}
const result = convertingArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']);
console.log(result);
//# sourceMappingURL=convertArrays.js.map