{
    // Object Distructuring

    const user = {
        id: 123,
        name: {
            firstName: "Sanjit",
            middleName: "Kumar",
            lastName: "Ghosh"
        },
        age: 25,
        address: "Dhaka"
    }


    const { address, name: { middleName } } = user;


    // Array Distructuring

    const myFriends = ['Charly', "Merley", "Alex", "Jony", "Kitty"];

    const [, , bestFriend, ...rest] = myFriends;















}