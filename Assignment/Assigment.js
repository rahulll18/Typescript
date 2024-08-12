let fruits;
fruits = ['Apple', 'Orange', 'Banana'];
//Removes the last element of the array and return that element
//fruits.pop();
fruits.push('Watermelon'); //Adds new elements to the array and returns the new array length
console.log(fruits);
let numbers = [10, 40, 20, 30];
//sort the array
numbers.sort();
console.log(numbers);
//Returns the index of the first match of a value in the array (-1 if not found)
let index = numbers.indexOf(40);
console.log(index);
//Joins two arrays and returns the combined result
numbers = numbers.concat([60, 50]);
console.log(numbers);
numbers.fill(555, 0, 3);
console.log(numbers);
//Adds or removes elements from the array
numbers.splice(1, 2);
console.log(numbers);
//Adds one or more elements to the beginning of the array
let val = [100, 200];
numbers.unshift(...val);
console.log(numbers);
if (numbers.includes(100)) {
    console.log("Element is present");
}
else {
    console.log("Element is absent");
}
