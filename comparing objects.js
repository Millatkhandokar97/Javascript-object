//Comparing Two Objects

let obj = {
    a: 10,
    b: 20
}
let obj2 = {
    a: 10,
    b: 20
}

if(obj.a === obj2.a && obj.b === obj2.b){
    console.log(true);
}else{
    console.log(false);
}

console.log(obj);
console.log(JSON.stringify(obj) === JSON.stringify(obj2));