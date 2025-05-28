{

    // learn spread operator



    // Array

    const bros1: string[] = ['Pranto', 'Fazlay', "Junak"];
    const bros2: string[] = ['Nahid', 'Roza', "Najim"];


    bros1.push(...bros2)



    // Object

    const mentors1 = {
        ts: "Nabil",
        redux: "Devit"
    }

    const mentors2 = {
        db: "Alex",
        cloud: "John"
    }


    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    // Lern rest operator

    const greetFriends = (...friends: string[]) => {

        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('babul', 'kabul', 'habul', 'chabul')


}