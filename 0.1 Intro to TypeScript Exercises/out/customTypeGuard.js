"use strict";
function customTypeGuard(value) {
    return Array.isArray(value) && value.every(item => typeof item === 'string');
}
console.log(customTypeGuard({ test: 'one' }));
console.log(customTypeGuard(['a', 'b', 'c']));
//# sourceMappingURL=customTypeGuard.js.map