{
    // 
    // constraints

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next Level Web Development.'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({ id: 11, name: "Mr. X", email: "x@gmail.com", devType: "NLWD" });

    const student2 = addCourseToStudent({ id: 12, name: "Mr. Y", email: "Y@gmail.com", hasWatch: "Apple Watch" })

    const student3 = addCourseToStudent({ id: 33, name: 'Jack', email: 'sd@g.com' })










    //
}