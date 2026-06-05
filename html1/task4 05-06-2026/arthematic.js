let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);
//assignment operators
let num = 20;

console.log("Original:", num);

num += 10;
console.log("+= :", num);

num -= 5;
console.log("-= :", num);

num *= 2;
console.log("*= :", num);

num /= 5;
console.log("/= :", num);

num %= 3;
console.log("%= :", num);

num **= 2;
console.log("**= :", num);

//comparison operators
let x = 20;
let y = 15;
let z = "20";

console.log("x == z :", x == z);
console.log("x === z :", x === z);

console.log("x != y :", x != y);
console.log("x !== z :", x !== z);

console.log("x > y :", x > y);
console.log("x < y :", x < y);

console.log("x >= 20 :", x >= 20);
console.log("y <= 20 :", y <= 20);
// logical operators
let a = 10;
let b = 20;

console.log("AND (&&):", a > 5 && b > 15);
console.log("OR (||):", a > 15 || b > 15);
console.log("NOT (!):", !(a > 5));
// dynamic string formatting
let studentName = "Ravi";
let marks = 88;

console.log(`Student ${studentName} scored ${marks} marks.`);

let birthYear = 2004;
let currentYear = 2026;

console.log(`Age: ${currentYear - birthYear} years`);

let employee = "John";
let basicSalary = 40000;
let bonus = 5000;

console.log(`
Employee: ${employee}
Basic Salary: ₹${basicSalary}
Bonus: ₹${bonus}
Total Salary: ₹${basicSalary + bonus}
`);