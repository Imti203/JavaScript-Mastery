
let num = 30.91344364;

// If need round number
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num)); 

// SQURE VALUE 
console.log(Math.pow(5, 2));

// ROOT VALUE
console.log(Math.sqrt(64));

// POSITIVE VALUE
console.log(Math.abs(-10));

// MINIMUM NUMBER 
console.log(Math.min(5, 2, 6, 4, 8, 7, 9, 1 ,0));

// MAXIMUM NUMBER 
console.log(Math.max(5, 2, 6, 4, 8, 7, 9, 1 ,0));

// PI 
console.log(Math.PI);

console.log(Math.cos(0*Math.PI / 180));
console.log(Math.sin(90*Math.PI / 180));

// Random Number
console.log(Math.ceil(Math.random() * 6));


// lodo dice button click

function rollDice() {
    let randomNumber = Math.ceil(Math.random() * 6);
    let imgSrc ='img/' + randomNumber + '.png';

    document.getElementById('image').src = imgSrc;
}

