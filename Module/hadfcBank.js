"use strict";
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountType, accountBalance, customerId, accountNumber) {
        if (accountType === void 0) { accountType = "current"; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accountNumber === void 0) { accountNumber = 0; }
        this.accountType = accountType;
        this.accountBalance = accountBalance;
        this.customerId = customerId;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        if (amount >= this.accountBalance)
            this.accountBalance = this.accountBalance - amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
exports.bankName = "HDFC Bank";
