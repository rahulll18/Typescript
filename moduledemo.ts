import {BankAccount} from './Module/hadfcBank';
import { BankAccount as axisBankAccount } from './Module/hadfcBank';
import * as col from './Module/college';

//prefix
import * as bank from './Module/axisBank'


let hfcBank = new BankAccount("saving",45000 ,1 );
let axisAc = new axisBankAccount();
console.log(axisAc.customerId)

console.log(bank.bankName)

let clg = new col.college();
console.log(clg.collegeId);



