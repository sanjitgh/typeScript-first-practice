"use strict";
{
    // learn spread operator
    // Array
    const bros1 = ['Pranto', 'Fazlay', "Junak"];
    const bros2 = ['Nahid', 'Roza', "Najim"];
    bros1.push(...bros2);
    // Object
    const mentors1 = {
        ts: "Nabil",
        redux: "Devit"
    };
    const mentors2 = {
        db: "Alex",
        cloud: "John"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Lern rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('babul', 'kabul', 'habul', 'chabul');
}
