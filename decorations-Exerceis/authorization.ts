class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

function isAuthorizated(auhthetication: MockAuthrizationService){
    return function (target: any, accessor: string, descriptor: PropertyDescriptor){
        const originalGetter = descriptor.get
        descriptor.get = function() {
            if(auhthetication.canViewData(accessor)){
                return originalGetter?.call(this);
            }else {
                throw new Error('You are not authorized to view this information!')
            }
        }
      return descriptor
    }
}

let mockAuthorizationService = new MockAuthrizationService('Admin');

class User {
    private _name: string;
    private _age : number;
    private _creditCardInformation: string;

    constructor(name: string, age: number, creditCardInformation: string){
        this._name = name;
        this._age = age;
        this._creditCardInformation = creditCardInformation
    }

    @isAuthorizated(mockAuthorizationService)
    get name(): string {
        return this._name
    }
     @isAuthorizated(mockAuthorizationService)
    get age(): number {
        return this._age
    }
 @isAuthorizated(mockAuthorizationService)
    get creditCardNumber(): string{
        return this._creditCardInformation
    }
}





const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);
