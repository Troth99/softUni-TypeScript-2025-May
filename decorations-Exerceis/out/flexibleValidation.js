var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function nameValidation(minLength) {
    return function (target, propertyKey, descriptor) {
        const originalValue = descriptor.set;
        descriptor.set = function (val) {
            if (val.length < minLength) {
                throw new Error(`Name must have a min length of ${minLength} characters`);
            }
            originalValue?.call(this, val);
        };
        return descriptor;
    };
}
function ageValidation(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalValue = descriptor.set;
        descriptor.set = function (age) {
            if (age < min || age > max) {
                throw new Error(`age must be between ${min}and ${max}`);
            }
            originalValue?.call(this, age);
        };
        return descriptor;
    };
}
function passwordValidation(regexPatern) {
    return function (target, propertyKey, descriptor) {
        const originalValue = descriptor.set;
        descriptor.set = function (password) {
            if (!password.match(regexPatern)) {
                throw new Error(`password needs to match ${regexPatern}`);
            }
            originalValue?.call(this, password);
        };
        return descriptor;
    };
}
class User {
    _name;
    _age;
    _password;
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    set name(val) { this._name = val; }
    set age(val) { this._age = val; }
    set password(val) { this._password = val; }
    get name() { return this._name; }
    get age() { return this._age; }
}
__decorate([
    nameValidation(3),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "name", null);
__decorate([
    ageValidation(1, 100),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], User.prototype, "age", null);
__decorate([
    passwordValidation(/^[a-zA-Z0-9]+$/g),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "password", null);
// minLength = 1
// min = 1, max = 150
// regex = /^[a-zA-Z0-9!@]+$/g
// let user = new User('John', 130, 'hardPassword12');
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
// let user4 = new User('Jo', 20, 'password123');
// minLength = 3
// min = 1, max = 100
// regex = /^[a-zA-Z0-9]+$/g
let user = new User('John', 130, 'hardPassword12');
export {};
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
// let user4 = new User('Jo', 20, 'password123');
//# sourceMappingURL=flexibleValidation.js.map