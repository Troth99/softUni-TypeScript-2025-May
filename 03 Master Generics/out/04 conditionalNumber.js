"use strict";
function conditionalNumber(value) {
    switch (typeof (value)) {
        case 'number':
            console.log(value.toFixed(2));
            break;
        default:
            console.log(value);
    }
}
conditionalNumber(20.3555);
conditionalNumber("wow");
conditionalNumber("a string");
20.36;
//# sourceMappingURL=04%20conditionalNumber.js.map