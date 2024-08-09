var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, custId, accountType, accountBalance) {
        this.accountNumber = accountNumber;
        this.custId = custId;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.depositeMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withDrawMoney = function (amount) {
        if (amount <= this.accountBalance) {
            this.accountBalance = this.accountBalance - amount;
        }
        else {
            throw new Error("Insufficient Balance");
        }
        return this.accountBalance;
    };
    return BankAccount;
}());
// let account1:BankAccount;
// account1 = new BankAccount();
// let account2 = new BankAccount();
// account2.accountNumber=111;
// account2.accountBalance=45000;
// console.log(account2.withDrawMoney(5000));
var account = new BankAccount(444, 2, "Saving", 50000);
console.log(account.accountBalance);
console.log(account.custId);
console.log(account.accountNumber);
