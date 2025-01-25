// Arithmetic Operator

    // Addition
    const a = 10;
    const b = 5;
    let resultAdd = a + b;
    console.log(resultAdd)

    // Subtraction
    let resultSub = a - b;
    console.log(resultSub)

    // Multiplication
    let resultMul = a * b;
    console.log(resultMul)

    // Division 
    let resultDiv = a / b;
    console.log(resultDiv)

    // Exponent 
    let resultExp = a ** b;
    console.log(resultExp)

    // 	Modulus 
    let resultMod = a % b;
    console.log(resultMod);
    /*
    let userInput = prompt(`Enter the number`);
    let numberMain = parseInt(userInput);

    if (numberMain % 2 === 0) {
        console.log(`${numberMain} is even number`)
    }else {
        console.log(`${numberMain} is odd number`)
    }
    */

    // Increment Decrement 
    let resultInc = 3;
    resultInc++;
    console.log(resultInc)

    let resultDec = 3;
    resultDec--;
    console.log(resultDec)

// Comparison operator => true or false
    const x = 5;
    const y = 10;

        // Greater than
        console.log( x > y)

        // Greater than or Equel to 
        console.log( x >= y)
    
        // Less than 
        console.log( x < y)
    
        // Less than or Equet to
        console.log( x <= y)

        // Is Equet 
        console.log( x == y)

        // Not Equel 
        console.log( x !== y)

        // Strict Equelity 
        console.log( x === y)

        // Strict Inequelity 
        console.log( x !== y);

//Logical Operators

    // AND && ==> All operaned are true ==> TRUE
    console.log(true && false && true)
    console.log(true && true && true)

    // OR || ==> All operaned is false ==> False 
    console.log(true || false)

    // NOT ! 
    console.log(!false)
    console.log(!true)

// Assignment Operator

    let number = 10;
    number += 5; // number = number + 5
    console.log(number)
    number -= 5; // number = number - 5
    console.log(number)
    number *= 5; // number = number * 5
    console.log(number)
    number /= 5; // number = number / 5
    console.log(number)
    number **= 5; // number = number ** 5
    console.log(number)

// Ternary (conditional) operator

let j = x < 5 ? 'True' : 'False';
console.log(j)