// abstraction

interface Vahicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// real implementation

class Car implements Vahicle {
    startEngine(): void {
        console.log("I am starting the car engine");
    }

    stopEngine(): void {
        console.log("I am stoping the car");
    }

    move(): void {
        console.log("I am moving");
    }

    test(): void {
        console.log("I am just testing");
    }
}

const toyotoCar = new Car();
toyotoCar.stopEngine()