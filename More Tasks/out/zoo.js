"use strict";
class ZooAnimal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
class Lion extends ZooAnimal {
    hunt() {
        return `Lion ${this.name} is hunting`;
    }
    makeSound() {
        return 'Roar';
    }
}
class Elephant extends ZooAnimal {
    sprayWater() {
        return `Elephant ${this.name} is spraying water`;
    }
    makeSound() {
        return 'Trumpt';
    }
}
class Cat extends ZooAnimal {
    meowing() {
        return `Kitty ${this.name} is meowing`;
    }
    makeSound() {
        return 'Meowwwwwww';
    }
}
function showingTheAnimal(animal) {
    console.log(`${animal.name} says ${animal.makeSound()}`);
}
const simba = new Lion("Simba", 5);
const elephant = new Elephant('Stoni', 29);
const cat = new Cat('Aniya', 2);
showingTheAnimal(simba);
showingTheAnimal(elephant);
showingTheAnimal(cat);
//# sourceMappingURL=zoo.js.map