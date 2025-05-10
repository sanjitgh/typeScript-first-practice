{
    //

    // type assertion

    let anything: any;

    anything = 'Next Level Web Development';
    anything = 22;


    // (anything as number).



    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `There is converted value ${convertedValue}`
        }

        if (typeof value === 'number') {
            return value * 1000
        }
    }


    const result1 = kgToGm(1000) as number
    const result2 = kgToGm('200') as string

    console.log(result1);

    //




    //
}