let names = {
  fName: "John",
  lName: "Doe",
  age: 22,
  getPersonInfo() {
    return `${this.fName} ${this.lName}, age ${this.age}`;
  },
};

let adress = {
  city: "Boston",
  street: "Nowhere street",
  number: 13,
  postalCode: 51225,
  getAddressInfo() {
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
  },
};

type typeNames = typeof names;
type typeLocation = typeof adress;

function createCombinedFunction(names: typeNames, location: typeLocation) {
  return function (combineFunction: typeNames & typeLocation) {
    console.log(`Hello, ${combineFunction.getPersonInfo()} from ${combineFunction.getAddressInfo()}`)
  };
}

let combinedFunction = createCombinedFunction(names, adress);
let combinedPerson = Object.assign({}, names, adress);
combinedFunction(combinedPerson);
