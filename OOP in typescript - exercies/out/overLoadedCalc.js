"use strict";
class Calculator {
    calculate(operation, a, b, c, d) {
        let numbers = [a, b, c, d].filter((num) => num !== undefined);
        switch (operation) {
            case "power":
                return a ** b;
            case "log":
                if (a <= 0 || b <= 0) {
                    throw new Error("Invalid log values.");
                }
                return Math.log(a) / Math.log(b);
            case "add":
                return numbers.reduce((acc, val) => acc + val, 0);
            case "subtract":
                return numbers.reduce((acc, val) => acc - val, 0);
            case "multiply":
                return numbers.reduce((acc, val) => acc * val, 0);
            case "divide":
                const zeroNumbers = numbers.filter((num) => num !== 0);
                if (numbers.includes(0)) {
                    throw new Error("Cannot divide by zero.");
                }
                if (numbers.length < 2) {
                    throw new Error("At least two numbers are required for division.");
                }
                return zeroNumbers.reduce((acc, val) => acc / val);
        }
    }
}
const calc = new Calculator();
console.log(calc.calculate("power", 2, 3));
console.log(calc.calculate("power", 4, 1 / 2));
console.log(calc.calculate("log", 8, 2));
console.log(calc.calculate("add", 10, 5));
console.log(calc.calculate("add", 10, 5, 3));
console.log(calc.calculate("subtract", 10, 5));
console.log(calc.calculate("multiply", 2, 3, 4));
console.log(calc.calculate("divide", 100, 5, 2, 2));
//# sourceMappingURL=overLoadedCalc.js.map