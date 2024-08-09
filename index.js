console.log("Typescript !! haa bhai kya haal chal");
// let naam : string = "hello";
// console.log(naam);
var b = 55;
var c = 56;
console.log("addition is :- ", b + c);
var language = "Typescript";
console.log(language);
var isTrue = true;
if (!isTrue) {
    console.log('hello');
}
else {
    console.log("welcome");
}
var empId;
empId = 50;
//wrapping
var employeeId;
employeeId = new Number(empId);
//unwrapping
empId = employeeId.valueOf();
//wrapping
var married;
married = true;
//unwrapping
var marriedstatus;
marriedstatus = new Boolean(married);
//funtion with name
function test1() {
    return 10;
}
var add = function (a, b) { return a + b; };
console.log(add(55, 55));
var test3 = function () {
    return true;
};
var test2 = function () {
    return "working";
};
console.log(test1());
console.log(test2());
console.log(test3());
var city;
city = "pune";
console.log(city.charAt(2));
