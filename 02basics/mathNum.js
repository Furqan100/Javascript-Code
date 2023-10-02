// Numbeers in JS
const num = 1000;
console.log(typeof num);
const num2 = new Number(123000)
console.log( num2);
console.log(typeof num2);
// we can convert this number into string and then all string methods can be applied on it

let ntoS = num2.toString()
console.log(typeof ntoS )
console.log(ntoS.length);
console.log(ntoS.charAt(0));
console.log(ntoS.indexOf(3));

                // Number methods 
let numm = 100000
console.log(numm.toLocaleString('en-IN'))
                  // MATH IN JS

console.log(Math.floor(Math.random()))           
// console.log(Math.round(Math.random()))               
