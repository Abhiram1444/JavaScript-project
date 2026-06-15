/******************************************************************
    EMPLOYEE MANAGEMENT SYSTEM
    Demonstrates:
    - Ternary Operator
    - Loops
    - Functions
    - Scope
    - Recursion
    - Closures
    - IIFE
    - this Keyword
    - call(), apply(), bind()
    - Arrays
    - Array Searching
    - Array Iteration
******************************************************************/

// ====================================================
// IIFE (Immediately Invoked Function Expression)
// ====================================================

(function () {
    console.log("Employee Management System Started...");
})();


// ====================================================
// Global Scope Variable
// ====================================================

let companyName = "ABC Technologies";


// ====================================================
// Array Creation
// ====================================================

const employees = [
    {
        id: 101,
        name: "John",
        department: "IT",
        salary: 50000
    },
    {
        id: 102,
        name: "David",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Sara",
        department: "Finance",
        salary: 60000
    },
    {
        id: 104,
        name: "Mike",
        department: "IT",
        salary: 70000
    }
];


// ====================================================
// Function Declaration
// ====================================================

function displayEmployees() {
    console.log("\nEmployee Details:");

    // Looping through array using forEach()
    employees.forEach(function(emp) {
        console.log(
            `${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}`
        );
    });
}

displayEmployees();


// ====================================================
// Ternary Operator
// ====================================================

function checkSalary(employee) {

    let status =
        employee.salary >= 60000
            ? "High Salary"
            : "Normal Salary";

    console.log(`${employee.name}: ${status}`);
}

console.log("\nSalary Status:");

employees.forEach(checkSalary);


// ====================================================
// Loop Examples
// ====================================================

console.log("\nUsing For Loop:");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

console.log("\nUsing For...Of Loop:");

for (let emp of employees) {
    console.log(emp.name);
}


// ====================================================
// Array Searching
// ====================================================

console.log("\nArray Searching:");

let employeeFound =
    employees.find(emp => emp.id === 103);

console.log(employeeFound);

let employeeIndex =
    employees.findIndex(emp => emp.name === "Mike");

console.log("Mike Index:", employeeIndex);


// ====================================================
// Array Manipulation
// ====================================================

console.log("\nAdding New Employee:");

employees.push({
    id: 105,
    name: "Robert",
    department: "Admin",
    salary: 40000
});

console.log(employees);

console.log("\nRemoving Last Employee:");

employees.pop();

console.log(employees);


// ====================================================
// Function Returning Function (Closure)
// ====================================================

function salaryIncrement(incrementAmount) {

    return function(currentSalary) {
        return currentSalary + incrementAmount;
    };
}

const incrementBy5000 =
    salaryIncrement(5000);

console.log("\nClosure Example:");

console.log(
    "New Salary:",
    incrementBy5000(50000)
);


// ====================================================
// Scope Example
// ====================================================

function scopeExample() {

    let department = "Development";

    console.log("Company:", companyName);

    console.log("Department:", department);
}

console.log("\nScope Example:");

scopeExample();


// ====================================================
// Recursion Example (Factorial)
// ====================================================

function factorial(number) {

    if (number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("\nRecursion Example:");

console.log("Factorial of 5 =", factorial(5));


// ====================================================
// Object and this Keyword
// ====================================================

const manager = {

    name: "Ramesh",

    showDetails: function () {

        console.log(
            `Manager Name: ${this.name}`
        );
    }
};

console.log("\nthis Keyword:");

manager.showDetails();


// ====================================================
// call(), apply(), bind()
// ====================================================

const employeeObject = {
    name: "Kiran"
};

function greet(city, country) {

    console.log(
        `Hello ${this.name} from ${city}, ${country}`
    );
}

console.log("\ncall() Example:");

greet.call(employeeObject, "Hyderabad", "India");

console.log("\napply() Example:");

greet.apply(employeeObject, ["Mumbai", "India"]);

console.log("\nbind() Example:");

let bindFunction =
    greet.bind(employeeObject, "Chennai", "India");

bindFunction();


// ====================================================
// Arrow Function Example
// ====================================================

const calculateBonus = salary => salary * 0.10;

console.log("\nArrow Function:");

console.log(
    "Bonus:",
    calculateBonus(50000)
);


// ====================================================
// Array Methods
// ====================================================

console.log("\nmap() Example:");

let employeeNames =
    employees.map(emp => emp.name);

console.log(employeeNames);

console.log("\nfilter() Example:");

let highSalaryEmployees =
    employees.filter(
        emp => emp.salary >= 60000
    );

console.log(highSalaryEmployees);

console.log("\nreduce() Example:");

let totalSalary =
    employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );

console.log(
    "Total Salary:",
    totalSalary
);


// ====================================================
// Program End
// ====================================================

console.log("\nProject Completed Successfully!");