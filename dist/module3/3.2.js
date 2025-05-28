"use strict";
{
    //
    // opp ==> inheritence
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Sanjit", 22, "Dhaka");
    student1.age;
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} have class ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Ali", 44, "Dhaka", "Math");
    //
}
