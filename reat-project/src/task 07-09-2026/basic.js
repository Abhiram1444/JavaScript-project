// 1. Variables
var name = "Abhiram";
let age = 22;
const country = "India";

console.log(name);
console.log(age);
console.log(country);


// 2. Primitive Data Types
let username = "Abhiram";     // String
let userAge = 22;             // Number
let isEmployee = true;        // Boolean
let salary;                   // Undefined
let bonus = null;             // Null

console.log(username);
console.log(userAge);
console.log(isEmployee);
console.log(salary);
console.log(bonus);


// 3. Reference Data Types
let skills = ["HTML", "CSS", "JavaScript"]; // Array

let employee = {
    name: "Abhiram",
    age: 22,
    role: "Software Engineer"
}; // Object

console.log(skills);
console.log(employee);


// 4. typeof Operator
console.log(typeof username);   // string
console.log(typeof userAge);    // number
console.log(typeof isEmployee); // boolean
console.log(typeof skills);     // object
console.log(typeof employee);   // object


// 5. Type Conversion
let numberString = "100";

let number = Number(numberString);

console.log(number);
console.log(typeof number);


// 6. Type Coercion
let a = 10;
let b = "20";

console.log(a + b); // "1020"
console.log(a - b); // -10


// 7. Arithmetic Operators
let x = 10;
let y = 5;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus


// 8. Assignment Operators
let marks = 50;

marks += 10;
console.log(marks); // 60

marks -= 10;
console.log(marks); // 50


// 9. Comparison Operators
let first = 20;
let second = 10;

console.log(first > second);
console.log(first < second);
console.log(first === second);
console.log(first !== second);


// 10. Logical Operators
let userAge1 = 22;
let hasID = true;

console.log(userAge1 >= 18 && hasID); // AND
console.log(userAge1 < 18 || hasID);  // OR
console.log(!hasID);                  // NOT


// 11. Template Literals
let employeeName = "Abhiram";
let employeeRole = "Associate Software Engineer";
let employeeAge = 22;

let message = `
Employee Name: ${employeeName}
Age: ${employeeAge}
Role: ${employeeRole}
`;

console.log(message);