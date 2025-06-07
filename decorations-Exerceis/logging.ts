function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalValue = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Function '${propertyKey}' called with arguments: ${args.join(", ")}`
    );
    return originalValue.apply(this, args);
  };

  return descriptor;
}

class Person {
  public fName: string;
  public lName: string;

  constructor(firstName: string, secondName: string) {
    this.fName = firstName;
    this.lName = secondName;
  }
  @log
  static getFullName(firstName: string, secondName: string): string {
    const fullName = `${firstName} ${secondName}`;
    return fullName;
  }
}

let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
