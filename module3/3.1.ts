{
    //
    // oop ==> class

    class Animal {
        constructor(public name: string, public species: string, public sound: string) { }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }


    const dog = new Animal("German Shaperd vhi", "dog", "Ghew Ghew");
    const cat = new Animal("Persian vai", 'cat', 'meaw meaq');

    dog.makeSound()















    //
}