export {}

function nameValidation(minLength: number){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalValue = descriptor.set 
        descriptor.set = function(val: string){
            if(val.length < minLength){
                throw new Error(`Name must have a min length of ${minLength} characters`);
            }
             originalValue?.call(this, val)
        }
        return descriptor
    }
}

function ageValidation(min: number, max: number){
      return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalValue = descriptor.set

        descriptor.set = function(age: number){
         if (age < min || age > max) {
    throw new Error(`age must be between ${min}and ${max}`);
}
             originalValue?.call(this, age)
        }
        return descriptor
    }
}

function passwordValidation(regexPatern: RegExp){
     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const originalValue = descriptor.set

        descriptor.set = function(password: string){
            if(!password.match(regexPatern)){
                throw new Error(`password needs to match ${regexPatern}`)
            }
            originalValue?.call(this, password)
        }
        return descriptor
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    @nameValidation(3)
    set name(val: string) { this._name = val; }

    @ageValidation(1, 100)
    set age(val: number) { this._age = val; }

    @passwordValidation(/^[a-zA-Z0-9]+$/g)
    set password(val: string) { this._password = val; }

    get name() { return this._name; }
    get age() { return this._age; }
}


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
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
// let user4 = new User('Jo', 20, 'password123');

