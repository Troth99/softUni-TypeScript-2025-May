interface Animal {
  name: string;
  makeSound(): string;
}

type Age = number;

abstract class ZooAnimal implements Animal {
  constructor(public name: string, public age: Age) {
    this.name = name;
    this.age = age;
  }
  abstract makeSound(): string;
}

class Lion extends ZooAnimal {
  hunt(): string {
    return `Lion ${this.name} is hunting`;
  }
  makeSound(): string {
    return "Roar";
  }
}

class Elephant extends ZooAnimal {
  sprayWater(): string {
    return `Elephant ${this.name} is spraying water`;
  }

  makeSound(): string {
    return "Trumpt";
  }
}

class Cat extends ZooAnimal {
  meowing(): string {
    return `Kitty ${this.name} is meowing`;
  }

  makeSound(): string {
    return "Meowwwwwww";
  }
}

function showingTheAnimal(animal: Animal) {
  console.log(`${animal.name} says ${animal.makeSound()}`);
}

const simba = new Lion("Simba", 5);
const elephant = new Elephant("Stoni", 29);
const cat = new Cat("Aniya", 2);

showingTheAnimal(simba);
showingTheAnimal(elephant);
showingTheAnimal(cat);
