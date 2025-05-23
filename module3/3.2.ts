{
    //
    // opp ==> inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    const student1 = new Student("Sanjit", 22, "Dhaka")
    student1.age
    


    class Teacher extends Person {

        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} have class ${numOfClass}`);
        }
    }

    const teacher = new Teacher("Ali", 44, "Dhaka", "Math")


    //
}