"use strict";
exports.__esModule = true;
var hadfcBank_1 = require("./Module/hadfcBank");
var hadfcBank_2 = require("./Module/hadfcBank");
var bank = require("./Module/axisBank");
var hfcBank = new hadfcBank_1.BankAccount("saving", 45000, 1);
var axisAc = new hadfcBank_2.BankAccount();
console.log(axisAc.customerId);
console.log(bank.bankName);
