"use strict";
function swap(a, aindex, b, bindex1) {
    const swapValue = a[aindex];
    a[aindex] = b[bindex1];
    b[bindex1] = swapValue;
}
// let a = ['test', '123'];
// let b = ['a', 'b', 'c'];
// swap<string>(a, 0, b, 2);
// console.log(a)
// console.log(b)
let a = [20, 30, 40];
let b = [1, 2, 3, 4, 5];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
//# sourceMappingURL=arraySwap.js.map