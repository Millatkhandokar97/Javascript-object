//Object Methods in Javascript

let obj = {
    x: 10,
    y: 20,
    z:30
}

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));

let obj2 = Object.assign({}, obj)
obj2.x = 100
console.log(obj);
console.log(obj2);