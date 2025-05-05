{
    // ternary operator || optional chaining || nullish coalescing

    const age: number = 15;

    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Child");
    }

    const isAdult = age >= 18 ? "Adult" : "Child"

    // console.log({ isAdult });

    const isAuthenticted = undefined;

    const result1 = isAuthenticted ? isAuthenticted : "Guest";
    const result2 = isAuthenticted ?? "Guest";

    console.log({ result1, result2 });











}