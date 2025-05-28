{
    // static

    class Counter {
        static count: number = 0;

        static increment() {
            return (Counter.count = Counter.count + 1);
        }

        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }

    // const instanse1 = new Counter();
    console.log(Counter.increment());

    // const instanse2 = new Counter();
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.increment());
    console.log(Counter.increment());



}
