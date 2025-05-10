{
    // interface

    type User1 = {
        name: string;
        age: number
    }
    interface User2 {
        name: string;
        age: number
    }

    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user1: UserWithRole2 = {
        name: 'sanjit',
        age: 11,
        role: "Manager"
    }

    type rollNumber = number


    // js --> object, arrary --> object, function --> object

    type Role1 = number[];

    interface Role2 {
        [index: number]: number
    }

    const role1: Role2 = [1, 2, 3]

    type Add = (num1: number, num2: number) => number;
    
    interface Add2 {
        (num1: number, num2: number): number
    }


    const add: Add2 = (num1, num2) => num1 + num2













    //
}