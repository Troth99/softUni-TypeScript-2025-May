"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorator1 = decorator1;
exports.decorator2 = decorator2;
exports.decorator3 = decorator3;
exports.decorator4 = decorator4;
exports.decorator5 = decorator5;
function decorator1(constructor) {
    return class extends constructor {
        get totalPrice() {
            return super.totalPrice * 1.2;
        }
        get cancellationPrice() {
            return super.cancellationPrice * 1.2;
        }
    };
}
function decorator2() { }
function decorator3() { }
function decorator4() { }
function decorator5(constructor) {
    class PartialMonthlyMotel extends constructor {
        static MotelName = 'Monthly Motel';
    }
    return PartialMonthlyMotel;
}
//# sourceMappingURL=decorators.js.map