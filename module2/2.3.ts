{

    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [2, 4, 5, 6];

    const rollNumbers: GenericArray<number> = [2, 4, 5, 6];

    // const mentors: string[] = ["Mr x", "Mr y", "Mr z"];
    const mentors: GenericArray<string> = ["Mr x", "Mr y", "Mr z"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];


    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "Sanjit",
            age: 22
        },
        {
            name: "Babul",
            age: 33
        },

    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y];



    const manus: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

    const userId: GenericTuple<number, { name: string, email: string }> = [123, { name: "Sanjit", email: "s@g.com" }]

}