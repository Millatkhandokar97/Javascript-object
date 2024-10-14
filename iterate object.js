//Iterate Object Properties in Javascript

let obj = {
    x: 10,
    y: 20,
    z:30
}

console.log('x' in obj);
console.log('p' in obj);


for(let i in obj){
    console.log(i);
    console.log(obj[i]);
    console.log(i + ': ' + obj[i]);
}