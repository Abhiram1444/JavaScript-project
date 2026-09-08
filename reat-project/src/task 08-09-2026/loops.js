// --------------------
// Truthy and Falsy
// --------------------

let name = "Abhiram";

if (name) {
    console.log("Name is available");
} else {
    console.log("Name is not available");
}


// --------------------
// Conditional Statements
// --------------------

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Nested Condition
let age = 20;

if (age >= 18) {
    if (marks >= 40) {
        console.log("Eligible and Passed");
    }
}


// Switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}


// Ternary Operator
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);


// --------------------
// Loops
// --------------------

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("For:", i);
}

// while loop
let i = 1;

while (i <= 3) {
    console.log("While:", i);
    i++;
}

// do...while
let j = 1;

do {
    console.log("Do While:", j);
    j++;
} while (j <= 3);


// for...in
let student = {
    name: "Abhiram",
    age: 20,
    marks: 75
};

for (let key in student) {
    console.log(key, student[key]);
}


// for...of
let subjects = ["JavaScript", "HTML", "CSS"];

for (let subject of subjects) {
    console.log(subject);
}


// --------------------
// Functions
// --------------------

// Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Function Expression
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// Arrow Function
const square = (number) => number * number;

console.log(square(5));


// Default Parameter
function greet(name = "Student") {
    console.log("Hello " + name);
}

greet();
greet("Abhiram");


// Rest Parameter
function total(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(total(10, 20, 30));


// Arguments Object
function showArguments() {
    console.log(arguments);
}

showArguments("HTML", "CSS", "JavaScript");


// Recursive Function
function countdown(number) {
    if (number === 0) {
        return;
    }

    console.log(number);
    countdown(number - 1);
}

countdown(5);


// Callback Function
function calculate(a, b, operation) {
    return operation(a, b);
}

function addNumbers(x, y) {
    return x + y;
}

console.log(calculate(10, 20, addNumbers));