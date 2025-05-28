"use strict";
{
    // static
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    // const instanse1 = new Counter();
    console.log(Counter.increment());
    // const instanse2 = new Counter();
    console.log(Counter.decrement());
    console.log(Counter.decrement());
    console.log(Counter.increment());
    console.log(Counter.increment());
}
