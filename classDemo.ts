class BankAccount{
    accountNumber:number;
    custId:number;
    accountType:string;
    accountBalance:number;

    // constructor()
    // {
    //     this.accountNumber = 0;
    //     this.custId = 0
    //     this.accountType = 'saving'
    //     this.accountBalance = 0;
    // }

    constructor(accountNumber:number, custId:number,accountType:string, accountBalance:number){
        this.accountNumber = accountNumber;
        this.custId = custId;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
    }

    depositeMoney(amount:number):number{
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    }

    withDrawMoney(amount:number):number{
        if(amount<=this.accountBalance){
            this.accountBalance = this.accountBalance - amount;
        }else{
            throw new Error("Insufficient Balance")
        }
        return this.accountBalance;
    }
}

// let account1:BankAccount;
// account1 = new BankAccount();

// let account2 = new BankAccount();
// account2.accountNumber=111;
// account2.accountBalance=45000;

// console.log(account2.withDrawMoney(5000));

let account = new BankAccount(444,2,"Saving",50000);
console.log(account.accountBalance);
console.log(account.custId);
console.log(account.accountNumber);