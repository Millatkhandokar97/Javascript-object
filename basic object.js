//Object Literal vs Constructor

let obj = {
    bangla: 10,
    english: 11,
    math: 12
}
console.log(typeof obj);
console.log(obj);

obj.sociology = 13
obj.psychic = 14

console.log(obj);

console.log(obj.bangla + obj.english);
console.log(obj['bangla'], + obj['math']);

obj.bangla = 20 //value update
console.log(obj);

delete obj.math //remove value
console.log(obj);

console.log(obj.x); //undefined property

