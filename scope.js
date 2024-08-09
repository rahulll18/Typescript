var BankAccount = /** @class */ (function () {
    /* if we r declaring instance variables in constructor parenthesis, then
    compulsory need to use scope keywords */
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
    Object.defineProperty(BankAccount.prototype, "custId", {
        // we need some public properties which will returns us values of private varibles
        // or to change the values of private variables
        get: function () {
            return this.customerId;
        },
        set: function (customerId) {
            this.customerId = customerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accType", {
        get: function () {
            return this.accountType;
        },
        set: function (accountType) {
            this.accountType = accountType;
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}()); // class body end
// scope of private properties ends here
var account1; // custom Data types
account1 = new BankAccount("savings", 23000, 4500, 6666666666); // default constructor : no parameters
var account2 = new BankAccount("salary");
var account3 = new BankAccount("salary", 67000);
var account4 = new BankAccount("salary", 55000, 666);
var account5 = new BankAccount();
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
console.log("Customer Id of account 2:" + account2.custId);
account2.custId = 4567;
account3.accType = "savings";
console.log("Type of account 3: " + account3.accType);
