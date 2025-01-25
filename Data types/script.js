// String


const singleQuotes = 'Hello!';
const doubleQuotes = 'Hello!!';
const backticks = `Hello!!!`;

console.log(singleQuotes)
console.log(doubleQuotes)
console.log(backticks)

const firstN = 'Jhon';
const lastN = 'Welcome'
const finalN = `${singleQuotes} ${firstN}, ${lastN},${2+2} `;
console.log(finalN)

console.log(typeof backticks, typeof singleQuotes, typeof doubleQuotes)

// Number 

const intNumber = 5;
const floatNumber = 5.5;
const result = intNumber + floatNumber;

console.log(result)
console.log(typeof result) 

// bigInt 
const bigIntN = 999999999999999999999n;
const bigIntN2 = 99999999999999999999999n;
console.log(bigIntN + bigIntN2)

// Booleans 
// true - yes, correct, 1
// false - no, incorrect, 0

const iscool = true ;

if (iscool) {
    console.log(`Hi, you're cool!`)
}else {
    console.log(`you're not cool!`)
}

const age = 30;
console.log( age > 20)
console.log( age < 20)

// null 
let year = null;
console.log(year)
console.log(typeof year)

// undefined 
let x;
console.log(x)
console.log(typeof x)
