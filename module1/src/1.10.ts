{
    // Union types

    // type FrontendDeveloper = "Fakibuz" | "Junior";
    // type FullstackDeveloper = "Fakibuz" | "Expert";
    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: FrontendDeveloper = 'Junior'


    // type User = {
    //     name: string,
    //     email?: string,
    //     gender: "male" | "female",
    // }


    // const user1: User = {
    //     name: "sanjit",
    //     email: 's@g.com',
    //     gender: 'male'
    // }



    type FrontendDeveloper = {
        skills: string[],
        designation1: "Frontent Developer"
    }
    type BackendDeveloper = {
        skills: string[],
        designation2: "Backend Developer"
    }


    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;


    const fullstactDeveloper: FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: "Frontent Developer",
        designation2: "Backend Developer"
    }













}