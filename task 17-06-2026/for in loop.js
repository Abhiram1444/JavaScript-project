// for in
//basic object iteration
const student = {
    name: "Abhiram",
    age: 22,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}

//print student details
const studentt = {
    rollNo: 1,
    name: "Anil",
    grade: "A"
};

for (let key in studentt) {
    console.log(key, studentt[key]);
}

// date object
console.log("===== JavaScript Date Object Example =====");

// Create current date and time
const now = new Date();

// Getting Date Information
console.log("Current Date Object:", now);
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // +1 because month starts from 0
console.log("Date:", now.getDate());
console.log("Day Number:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp:", now.getTime());

console.log("\n===== Formatted Date & Time =====");

console.log("Date String:", now.toDateString());
console.log("Time String:", now.toTimeString());
console.log("Locale Date:", now.toLocaleDateString());
console.log("Locale Time:", now.toLocaleTimeString());

console.log("\n===== Day Name =====");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Today is:", days[now.getDay()]);

console.log("\n===== Modify Date =====");

// Create a copy of current date
const modifiedDate = new Date(now);

modifiedDate.setFullYear(2030);
modifiedDate.setMonth(11); // December
modifiedDate.setDate(25);
modifiedDate.setHours(10);
modifiedDate.setMinutes(30);
modifiedDate.setSeconds(45);

console.log("Modified Date:", modifiedDate);

console.log("\n===== Age Calculator =====");

const birthYear = 2000;
const age = now.getFullYear() - birthYear;

console.log("Age:", age);

console.log("\n===== Greeting Based On Time =====");

const currentHour = now.getHours();

if (currentHour < 12) {
    console.log("Good Morning");
} else if (currentHour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}

console.log("\n===== Days Until New Year =====");

const nextYear = now.getFullYear() + 1;

const newYear = new Date(nextYear, 0, 1);

const difference = newYear - now;

const daysLeft = Math.ceil(
    difference / (1000 * 60 * 60 * 24)
);

console.log("Days Left Until New Year:", daysLeft);

console.log("\n===== Custom Date =====");

const birthday = new Date(2000, 4, 15);

console.log("Birthday:", birthday.toDateString());

console.log("\n===== Digital Clock Format =====");

console.log(
    `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
);

// dynamic data using variables
const employee = {
    id: 101,
    name: "Abhiram",
    department: "Development",
    salary: 15000
};

const today = new Date();

const annualSalary = employee.salary * 12;

const message = `
========== EMPLOYEE REPORT ==========

Employee ID   : ${employee.id}
Employee Name : ${employee.name}
Department    : ${employee.department}
Monthly Salary: ₹${employee.salary}
Annual Salary : ₹${annualSalary}

Generated On  :
${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}

=====================================
`;

console.log(message);

//math object complete all examples
console.log("PI =", Math.PI);

console.log("Round =", Math.round(4.6));

console.log("Floor =", Math.floor(4.9));

console.log("Ceil =", Math.ceil(4.1));

console.log("Trunc =", Math.trunc(4.9));

console.log("Power =", Math.pow(2, 3));

console.log("Square Root =", Math.sqrt(81));

console.log("Cube Root =", Math.cbrt(27));

console.log("Absolute =", Math.abs(-100));

console.log("Maximum =", Math.max(10, 20, 30));

console.log("Minimum =", Math.min(10, 20, 30));

console.log(
    "Random Number =",
    Math.floor(Math.random() * 10) + 1
);

// string objects
let text = " JavaScript Programming ";

console.log("Original:", text);

console.log("Length:", text.length);

console.log("Uppercase:", text.toUpperCase());

console.log("Lowercase:", text.toLowerCase());

console.log("Character at 4:", text.charAt(4));

console.log("Index Of Script:",
    text.indexOf("Script"));

console.log("Includes Java:",
    text.includes("Java"));

console.log("Starts With Space:",
    text.startsWith(" "));

console.log("Ends With Space:",
    text.endsWith(" "));

console.log("Slice:",
    text.slice(1, 11));

console.log("Substring:",
    text.substring(1, 11));

console.log("Replace:",
    text.replace("Programming", "Language"));

console.log("Trim:",
    text.trim());

console.log("Split:",
    "HTML,CSS,JS".split(","));

console.log("Concat:",
    "Hello".concat(" ", "World"));

console.log("Repeat:",
    "JS ".repeat(3));

console.log("PadStart:",
    "5".padStart(3, "0"));

console.log("PadEnd:",
    "JS".padEnd(5, "*"));