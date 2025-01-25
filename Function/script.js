
// Code Driven Invocation
function myfunction(fullName, age, dateOfBirth) {
    console.log(' My name is ' + fullName + ' I am ' + age + ' My date of birth ' + dateOfBirth )
}
myfunction ('Imtiaz', 31, 1993);
myfunction ('Abdul', 35, 1988);


// Event Driven Invocation  
// button 'subscribed'
function isSubscribed() {
    console.log ('Subscribed')
}
document.getElementById('btn').addEventListener('click', isSubscribed);

// Automatic (Self-Invoked) Invocation
(function (message) {
    console.log( message + ' , ' + 'I am self invokeing function')
})('Hello');

// function expression 
let maths = function(x, y) {
    return x * y
}
console.log(maths(2, 3));
console.log(maths(10, 45));

// function access 
function myfunc () {
    let fullName = 'Ali';
    console.log(' My name is ' + fullName)
}
myfunc()

// in function let variable same name useable 
function myfuncs () {
    let fullName = 'Ali';
    console.log(' My name is ' + fullName)
}
myfuncs()

// numbers squre function
let numbers = [3, 4, 5, 6, 7, 8, 10];
let sqNumbers = numbers.map( function (Number) {
    return Number * Number
});
console.log(sqNumbers)

// Arrow function 

/*
let add = function(x, y) {
    return x + y;
}
console.log(add(2, 3));
*/ 

let add = (x, y) => x * y ;
console.log(add(2, 3));

// Nested Function 
function greet(fullName) {
    function sayHello()  {
        alert(' Hello ' + fullName )
    }
    return sayHello();
}
greet('Ali');