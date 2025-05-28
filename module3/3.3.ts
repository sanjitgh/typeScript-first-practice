{
    // type guard

    type Alphaneumeric = string | number;


    const add = (params1: Alphaneumeric, params2: Alphaneumeric): Alphaneumeric => {
        if (typeof params1 === 'number' && typeof params2 === "number") {
            return params1 + params2
        } else {
            return params1.toString() + params2.toString()
        }
    }

    const res = add(2, "5")

    console.log(res);



    //
}