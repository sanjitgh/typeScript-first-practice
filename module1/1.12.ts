{
    // nullable type

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is no Search");
        }

    }

    // searchName(null)


    // unknown number

    const getSpeedInMeterPerSecound = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else {
            console.log('Wrong input');
        }
    }

    getSpeedInMeterPerSecound(11)
    getSpeedInMeterPerSecound('50 km^-1')
    getSpeedInMeterPerSecound(null)

    //
}