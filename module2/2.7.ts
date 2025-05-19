{
    //

    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "ship" | 'car' // manually

    type Owner2 = keyof Vehicle



    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }


    const user = {
        name: "Sanjit",
        age: 25,
        address: 'Dhaka'
    }

    const car = {
        name: "Toyota",
        year: 2022
    }


    const result1 = getPropertyValue(car, 'year')
















    //
}