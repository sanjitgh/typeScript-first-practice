"use strict";
{
    const add = (params1, params2) => {
        if (typeof params1 === 'number' && typeof params2 === "number") {
            return params1 + params2;
        }
        else {
            return params1.toString() + params2.toString();
        }
    };
    const res = add(2, "5");
    console.log(res);
    //
}
