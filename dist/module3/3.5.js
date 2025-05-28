"use strict";
{
    // AccessModifire
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const goribAccount = new BankAccount(123, "Mr. Gorib", 10);
    goribAccount.getBalance;
    console.log(goribAccount.getBalance());
    //
}
