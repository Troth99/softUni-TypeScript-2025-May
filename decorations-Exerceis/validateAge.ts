function validateAge(target:any, propertyKey: string, descriptor: PropertyDescriptor){

    const originalAge = descriptor.set

    descriptor.set = function(propertyKey:number) {
        if(propertyKey < 1 || propertyKey > 200) {
            throw new Error('Age must be between 1 and 200!')
        }
        return originalAge?.call(this, propertyKey)
    }
    return descriptor
}


class Age {
    private _age!: number;
    constructor(age: number){ 
        this.age = age;
     }
     @validateAge
    set age(val: number){ this._age = val; }
    get age() { return this._age;  }
}


let ageVal = new Age(25);
console.log(ageVal.age)

