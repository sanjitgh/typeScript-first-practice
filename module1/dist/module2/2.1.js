"use strict";
{
    //
    // type assertion
    let anything;
    anything = 'Next Level Web Development';
    anything = 22;
    // (anything as number).
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `There is converted value ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm('200');
    console.log(result1);
    //
    //
}
