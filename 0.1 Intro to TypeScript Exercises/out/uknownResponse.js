"use strict";
function unknownResponse(arg) {
    let result = typeof arg.value;
    if (result === 'string') {
        console.log(arg.value);
    }
    else {
        console.log('-');
    }
    return result;
}
unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] });
unknownResponse({ code: 201, text: 'Created', value: 'Object Created' });
//# sourceMappingURL=uknownResponse.js.map