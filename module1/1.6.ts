{
    // Learning function
    // Normal function
    // Arrow function

    function add(num1: number, num2: number): number {
        return num1 + num2
    }

    add(2, 3) // normal function

    const addArrow = (num1: number, num2: number): number => num1 + num2 // Arrow function



    // Object ==> function ==> method

    const poorUser = {
        name: "Sanjit",
        balance: 0,
        addBalance(balance: number): string {
            return `My balance is ${this.balance + balance}`
        }
    }
}