"use strict";
{
    //
    // function with generics
    const createArray = (params) => {
        return [params];
    };
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const createArrayWithGenericObj = (params) => {
        return [params];
    };
    const res1 = createArray('bangladesh');
    const res2 = createArrayWithGeneric('Bangladesh');
    const res3 = createArrayWithGenericObj({
        id: 123,
        name: "Alex"
    });
    ////////////////////////////////
    const createArrayWithTupule = (params1, params2) => {
        return [params1, params2];
    };
    const res10 = createArrayWithTupule('Bangladesh', 123);
    const res11 = createArrayWithTupule('Bangladesh', { name: 'Asia' });
    ////////////////
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development.';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: "Mr. X", email: "x@gmail.com", devType: "NLWD" });
    const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "Apple Watch" });
    console.log(student1, student2);
    //
}
