"use strict";
function operator(params, operations, operand) {
    let result;
    if (operations === "Index" && (typeof params === "string" || Array.isArray(params))) {
        result = params[operand];
    }
    else if (operations === "Length" && (typeof params === "string" || Array.isArray(params))) {
        result = params.length % operand;
    }
    else if (operations === "Add") {
        if (typeof params === "string" || typeof params === 'number') {
            result = Number(params) + operand;
        }
    }
    console.log(result);
}
operator(['Just', 'Two'], 'Length', 5);
//# sourceMappingURL=operator.js.map