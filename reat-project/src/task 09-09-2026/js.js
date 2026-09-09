// ===============================
// ARRAYS
// ===============================

// Creating an array
let students = ["Rahul", "Priya", "Arun", "Sneha"];

console.log(students);

// Accessing elements
console.log(students[0]); // Rahul

// Adding elements
students.push("Kiran");       // Add at end
students.unshift("Amit");     // Add at beginning

// Removing elements
students.pop();               // Remove last
students.shift();             // Remove first

// Searching elements
console.log(students.includes("Priya")); // true
console.log(students.indexOf("Arun"));   // index position


// ===============================
// LOOPING THROUGH ARRAY
// ===============================

students.forEach((student) => {
    console.log(student);
});


// ===============================
// MAP
// ===============================

let marks = [70, 80, 65, 90, 75];

let updatedMarks = marks.map((mark) => mark + 5);

console.log(updatedMarks);
// [75, 85, 70, 95, 80]


// ===============================
// FILTER
// ===============================

let passedStudents = marks.filter((mark) => mark >= 70);

console.log(passedStudents);
// [70, 80, 90, 75]


// ===============================
// REDUCE
// ===============================

let totalMarks = marks.reduce((total, mark) => total + mark, 0);

console.log(totalMarks);
// 380


// ===============================
// FIND
// ===============================

let firstHighMark = marks.find((mark) => mark > 80);

console.log(firstHighMark);
// 90


// ===============================
// FIND INDEX
// ===============================

let highMarkIndex = marks.findIndex((mark) => mark > 80);

console.log(highMarkIndex);
// 3


// ===============================
// SOME
// ===============================

let hasFailedStudent = marks.some((mark) => mark < 40);

console.log(hasFailedStudent);
// false


// ===============================
// EVERY
// ===============================

let allPassed = marks.every((mark) => mark >= 35);

console.log(allPassed);
// true


// ===============================
// SORT
// ===============================

let numbers = [50, 10, 40, 20, 30];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [10, 20, 30, 40, 50]


// ===============================
// JOIN
// ===============================

let names = ["Rahul", "Priya", "Arun"];

let result = names.join(", ");

console.log(result);
// Rahul, Priya, Arun


// ===============================
// FLATTENING ARRAYS
// ===============================

let nestedArray = [1, [2, 3], [4, [5, 6]]];

let flatArray = nestedArray.flat(2);

console.log(flatArray);
// [1, 2, 3, 4, 5, 6]


// ===============================
// REMOVE DUPLICATES
// ===============================

let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers);
// [1, 2, 3, 4, 5]


// ==================================================
// OBJECTS
// ==================================================

// Creating an object
let student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript",
    marks: 85
};

// Accessing properties
console.log(student.name);
console.log(student["course"]);

// Updating property
student.marks = 90;

console.log(student);


// ===============================
// NESTED OBJECT
// ===============================

let employee = {
    name: "Arun",
    age: 24,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(employee.address.city);


// ===============================
// OBJECT METHODS
// ===============================

let user = {
    name: "Rahul",

    greet: function () {
        console.log("Hello " + this.name);
    }
};

user.greet();


// ===============================
// OBJECT.KEYS()
// ===============================

console.log(Object.keys(student));


// ===============================
// OBJECT.VALUES()
// ===============================

console.log(Object.values(student));


// ===============================
// OBJECT.ENTRIES()
// ===============================

console.log(Object.entries(student));


// ===============================
// SHALLOW COPY
// ===============================

let studentCopy = { ...student };

studentCopy.name = "Priya";

console.log(student);
console.log(studentCopy);


// ===============================
// DEEP COPY
// ===============================

let original = {
    name: "Arun",

    address: {
        city: "Hyderabad"
    }
};

let deepCopy = structuredClone(original);

deepCopy.address.city = "Bangalore";

console.log(original.address.city);
// Hyderabad

console.log(deepCopy.address.city);
// Bangalore


// ==================================================
// MODERN JAVASCRIPT
// ==================================================


// ===============================
// DESTRUCTURING
// ===============================

let person = {
    name: "Sneha",
    age: 23,
    city: "Hyderabad"
};

let { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);


// Array destructuring

let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


// ===============================
// SPREAD OPERATOR
// ===============================

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2];

console.log(combinedArray);


// Object spread

let basicDetails = {
    name: "Rahul",
    age: 22
};

let extraDetails = {
    course: "JavaScript",
    city: "Hyderabad"
};

let completeDetails = {
    ...basicDetails,
    ...extraDetails
};

console.log(completeDetails);


// ===============================
// REST OPERATOR
// ===============================

function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(calculateTotal(10, 20, 30, 40));
// 100


// ===============================
// OPTIONAL CHAINING
// ===============================

let customer = {
    name: "Arun",

    address: {
        city: "Hyderabad"
    }
};

console.log(customer.address?.city);
// Hyderabad

console.log(customer.contact?.phone);
// undefined


// ===============================
// NULLISH COALESCING
// ===============================

let username = null;

let displayName = username ?? "Guest";

console.log(displayName);
// Guest

let ageValue = 0;

let resultAge = ageValue ?? 18;

console.log(resultAge);
// 0