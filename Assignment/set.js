const mySet = new Set([1, 2, 2, 2, 56, 3, 4]);
//insertion
mySet.add(44);
//iteration
mySet.forEach(num => console.log(num));
//searching
if (mySet.has(4)) {
    console.log("Element is present");
}
else {
    console.log('Element is absent');
}
//deletion
mySet.delete(56);
