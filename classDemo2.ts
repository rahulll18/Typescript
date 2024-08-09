class BankAccount{
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;

    constructor(accountType="current",accBal=0, custId=0, accNum=0){
        this.accountNumber=accNum;
        this.accountBalance=accBal;
        this.customerId=custId;
        this.accountType=accountType;
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

let account = new BankAccount();
console.log(account.accountNumber);
console.log(account.customerId);
console.log(account.accountType);
console.log(account.accountBalance)