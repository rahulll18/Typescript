const myMap = new Map();
//insertion
myMap.set(1, "Rahul");
myMap.set(2, "Rohan");
myMap.set(3, "Harshal");
myMap.set(4, "Shraddha");
myMap.set(5, "Vimal");
//accessing element
console.log(myMap.get(2));
console.log(myMap.get(5));
//iteration
myMap.forEach((val, key) => {
    console.log("key :- " + key + " " + "val :- " + val);
});
//size
console.log(myMap.size);
//
if (myMap.has(4)) {
    console.log("key is present");
}
else {
    console.log('key is absent');
}
