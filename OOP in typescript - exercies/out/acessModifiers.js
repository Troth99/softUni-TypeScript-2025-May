"use strict";
class Employee {
    name;
    position;
    salary;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetails() {
        return `Name ${this.name}, Position: ${this.position}`;
    }
    showSalary() {
        return `Salary ${this.salary}`;
    }
}
//# sourceMappingURL=acessModifiers.js.map