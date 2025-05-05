{
    // Type Alice

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }

    const student1: Student = {
        name: "Sanjit",
        age: 12,
        gender: "Male",
        contactNo: '0142312312321',
        address: "Dhaka"

    }


    const student2: Student = {
        name: "Roxy",
        age: 12,
        gender: "femele",
        address: "Us"

    }

    const student3: Student = {
        name: "MR",
        age: 12,
        gender: "femele",
        address: "Us",
        contactNo: "21983791823"
    }



    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "alex"
    const isAdmin: IsAdmin = true;



    type Add = (num1: number, num2: number) => number;

    // const add = (num1: number, num2: number): number => num1 + num2




}