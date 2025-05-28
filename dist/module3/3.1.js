"use strict";
{
    //
    // oop ==> class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("German Shaperd vhi", "dog", "Ghew Ghew");
    const cat = new Animal("Persian vai", 'cat', 'meaw meaq');
    dog.makeSound();
    //
}
