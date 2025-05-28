"use strict";
{
    // getter & setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }
        // getBalance() {
        //     return this._balance;
        // }
        // setter
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        // getter
        get Balance() {
            return this._balance;
        }
    }
    const goribAccount = new BankAccount(123, "Mr. Gorib", 20);
    goribAccount.deposit = 1;
    const myBalance = goribAccount.Balance;
    console.log(myBalance);
    //
}
