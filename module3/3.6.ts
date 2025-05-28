{
    // getter & setter

    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }

        // getBalance() {
        //     return this._balance;
        // }

        // setter
        set deposit (amount: number){
            this._balance = this._balance + amount
        }

        // getter

        get Balance() {
            return this._balance
        }
    }


    const goribAccount = new BankAccount(123, "Mr. Gorib", 20);

    goribAccount.deposit = 1
    const myBalance = goribAccount.Balance;

    console.log(myBalance);



    //
}