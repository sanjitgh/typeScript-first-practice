{
    //

    // function with generics

    const createArray = (params: string): string[] => {
        return [params]
    }

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }

    const createArrayWithGenericObj = <T>(params: T): T[] => {
        return [params]
    }

    const res1 = createArray('bangladesh');
    const res2 = createArrayWithGeneric<string>('Bangladesh');

    type User = { id: number, name: string }
    const res3 = createArrayWithGenericObj<User>({
        id: 123,
        name: "Alex"
    });


    ////////////////////////////////

    const createArrayWithTupule = <T, Q>(params1: T, params2: Q): [T, Q] => {
        return [params1, params2]
    }

    const res10 = createArrayWithTupule<string, number>('Bangladesh', 123);
    const res11 = createArrayWithTupule<string, { name: string }>('Bangladesh', { name: 'Asia' });

    ////////////////

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development.'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: "Mr. X", email: "x@gmail.com", devType: "NLWD" });

    const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "Apple Watch" })

    console.log(student1, student2);




    //
}