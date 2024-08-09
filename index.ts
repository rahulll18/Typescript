console.log("Typescript !! haa bhai kya haal chal");


// let naam : string = "hello";
// console.log(naam);

let b: number = 55;
let c: number= 56;

console.log("addition is :- ", b+c);
let language: string= "Typescript";
console.log(language);


let isTrue:boolean =true;
if(!isTrue){
    console.log('hello');
}else{
    console.log("welcome");
}

let empId:number;
empId =50;

//wrapping
let employeeId:Number;
employeeId = new Number(empId)

//unwrapping
empId=employeeId.valueOf();

//wrapping
let married:boolean;
married = true;

//unwrapping
let marriedstatus : Boolean;
marriedstatus = new Boolean(married);

//funtion with name
function test1 ():number{
    return 10;
}

const add = (a:number,b:number):number => a+b;
console.log(add(55,55));


const test3 = function():boolean{
    return true;
}

const test2 =(): string  =>{
    return "working";
}
console.log(test1());
console.log(test2());
console.log(test3());

//type assertion with diamond operator
let city:any;
city = "pune";

console.log((<string>city).charAt(2));