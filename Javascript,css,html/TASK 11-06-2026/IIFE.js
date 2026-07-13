(function greet() {
    console.log("Hello");
})();

//
(function () {
    var greet = "Hello";
    console.log(greet); 
})();
console.log(greet);

var greet;
(function () {
     greet = "Hello";
    console.log(greet); 
})();
console.log(greet);

// passing parameter to IIFE
// (function(name1,name2) {
//     console.log("Welcome " + name1 + "" +name2);
// })("Abhiram","reddy");
//  console.log("hiiiiii")

 (function(name1,name2) {
    console.log("Welcome " + name1 + "" +name2);
})("Abhiram","reddy");

console.log("hiiiiii hello")

// claculate with IIFE
const calculator = (function() {

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    return {
        add,
        subtract
    };

})();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));

//closure 
function outer() {

    let name = "Abhiram";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();

result();

//firts class functions
// function stored in variable
//const greet = function() {
  //  return "Hello";
//};

//console.log(greet());
// function as argument
function execute(callback) {
    callback();
}

function sayHello() {
    console.log("Hello");
}

execute(sayHello);
// first class function example 
 function createDiscount(percent) {

    return function(price) {
        return price - (price * percent / 100);
    };
}

const studentDiscount = createDiscount(20);

console.log(studentDiscount(1000));

// pure functions 

//closure based functions
 //employee id generator
 function createEmployeeIdGenerator() {
    let id = 100;

    return function() {
        id++;
        return id;
    };
}

const generateId = createEmployeeIdGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());

//greeting generator
function createGreeting(message) {

    return function(name) {
        console.log(`${message}, ${name}`);
    };
}

const welcome = createGreeting("Welcome");
const hello = createGreeting("Hello");

welcome("Abhiram");
hello("aditya");

//Demonstrating Functions as Arguments and Returned from Other Functions
// function passed as argument 
function placeOrder(orderId, callback) {
    console.log("Order Placed:", orderId);

    callback();
}

function sendEmail() {
    console.log("Confirmation Email Sent");
}

placeOrder(101, sendEmail);
// function returned from another function in greeting generator
function createGreeting(message) {

    return function(name) {
        console.log(message + ", " + name);
    };
}

//const welcome = createGreeting("Welcome");

welcome("Abhiram");

// employee salary purefunction vs impure function
// pure function
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

console.log(calculateSalary(50000, 5000));

// impure function
let bonus = 5000;

function calculateSalary(salary) {
    return salary 
}

console.log(calculateSalary(50000));

// this keyword
console.log(this === window);

//this keyword exceution 
var username = "Abhiram";

console.log(this.username);
// this inside a reggular function
function show() {
    console.log(this);
}

show();
// this iniside a strict mode

"use strict";

function show() {
    console.log(this);
}

show();

// this inside an object method
const student = {
    name: "Abhiram",

    display() {
        console.log(this.name);
    }
};

student.display();
 // object with this keyword function
 
// object with arrow function



