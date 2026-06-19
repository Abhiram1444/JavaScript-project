/********************************************************************
 * STUDENT MANAGEMENT DASHBOARD
 * Demonstrates:
 * Arrays
 * Objects
 * Date Object
 * Math Object
 * String Object
 * DOM Manipulation
 * Event Handling
 * Dynamic DOM Creation
 * Asynchronous JavaScript
 ********************************************************************/


/********************************************************************
 * OBJECT CREATION
 ********************************************************************/

const students = [
    {
        id: 1,
        name: "Abhiram",
        marks: 90
    },
    {
        id: 2,
        name: "Rahul",
        marks: 75
    },
    {
        id: 3,
        name: "Priya",
        marks: 85
    }
];


/********************************************************************
 * OBJECT COPYING
 ********************************************************************/

// Shallow Copy using Spread Operator

const shallowCopy = [...students];

console.log("Original Students:", students);
console.log("Shallow Copy:", shallowCopy);

// Deep Copy using JSON

const deepCopy =
JSON.parse(JSON.stringify(students));

console.log("Deep Copy:", deepCopy);


/********************************************************************
 * DOM REFERENCES
 ********************************************************************/

const studentContainer =
document.getElementById("studentContainer");

const showStudentsBtn =
document.getElementById("showStudents");

const addStudentBtn =
document.getElementById("addStudent");

const filterStudentsBtn =
document.getElementById("filterStudents");

const searchStudentBtn =
document.getElementById("searchStudent");


/********************************************************************
 * DISPLAY STUDENTS
 ********************************************************************/

function displayStudents(studentArray)
{
    // Clear previous content

    studentContainer.innerHTML = "";

    studentArray.forEach(student =>
    {
        // Dynamic DOM Creation

        const div =
        document.createElement("div");

        div.classList.add("student");

        div.innerHTML = `
            <h3>${student.name}</h3>
            <p>ID: ${student.id}</p>
            <p>Marks: ${student.marks}</p>
        `;

        studentContainer.appendChild(div);
    });
}


/********************************************************************
 * EVENT HANDLING
 ********************************************************************/

showStudentsBtn.addEventListener(
    "click",
    function ()
    {
        displayStudents(students);
    }
);


/********************************************************************
 * ADD NEW STUDENT
 ********************************************************************/

addStudentBtn.addEventListener(
    "click",
    function ()
    {
        const newStudent =
        {
            id: students.length + 1,
            name: "New Student",
            marks: 95
        };

        students.push(newStudent);

        displayStudents(students);
    }
);


/********************************************************************
 * ARRAY FILTER
 ********************************************************************/

filterStudentsBtn.addEventListener(
    "click",
    function ()
    {
        const highScorers =
        students.filter(
            student => student.marks > 80
        );

        displayStudents(highScorers);
    }
);


/********************************************************************
 * ARRAY SEARCHING
 ********************************************************************/

searchStudentBtn.addEventListener(
    "click",
    function ()
    {
        const result =
        students.find(
            student => student.name === "Priya"
        );

        console.log("Found Student:", result);

        alert(
            result
                ? `${result.name} Found`
                : "Not Found"
        );
    }
);


/********************************************************************
 * ADVANCED ARRAY METHODS
 ********************************************************************/

// map()

const studentNames =
students.map(
    student => student.name
);

console.log("Names:", studentNames);


// reduce()

const totalMarks =
students.reduce(
    (sum, student) =>
        sum + student.marks,
    0
);

console.log("Total Marks:", totalMarks);


// some()

const hasTopper =
students.some(
    student => student.marks > 95
);

console.log("Has Topper:", hasTopper);


// every()

const allPassed =
students.every(
    student => student.marks >= 35
);

console.log("All Passed:", allPassed);


// sort()

const sortedStudents =
[...students].sort(
    (a, b) => b.marks - a.marks
);

console.log(
    "Sorted Students:",
    sortedStudents
);


/********************************************************************
 * DATE OBJECT
 ********************************************************************/

function updateDateTime()
{
    const now = new Date();

    document.getElementById("dateTime")
        .textContent =
        now.toLocaleString();
}

updateDateTime();

setInterval(
    updateDateTime,
    1000
);


/********************************************************************
 * MATH OBJECT
 ********************************************************************/

document
.getElementById("generateNumber")
.addEventListener(
    "click",
    function ()
    {
        const random =
        Math.floor(
            Math.random() * 100
        ) + 1;

        document
            .getElementById(
                "randomNumber"
            )
            .textContent =
            random;
    }
);


/********************************************************************
 * STRING OBJECT
 ********************************************************************/

const course =
"javascript programming";

console.log(
    course.toUpperCase()
);

console.log(
    course.includes("script")
);

console.log(
    course.replace(
        "javascript",
        "JavaScript"
    )
);

console.log(
    course.split(" ")
);


/********************************************************************
 * COUNTDOWN TIMER
 ********************************************************************/

let seconds = 10;

const timerDisplay =
document.getElementById("timer");

const timer =
setInterval(
    function ()
    {
        timerDisplay.textContent =
        seconds;

        seconds--;

        if (seconds < 0)
        {
            clearInterval(timer);

            timerDisplay.textContent =
            "Time Up!";
        }
    },
    1000
);


/********************************************************************
 * ASYNCHRONOUS JAVASCRIPT
 ********************************************************************/

console.log("Program Started");

setTimeout(
    function ()
    {
        console.log(
            "Executed After 3 Seconds"
        );
    },
    3000
);

console.log("Program Running");


/********************************************************************
 * ARRAY SEARCHING EXAMPLES
 ********************************************************************/

const index =
students.findIndex(
    student => student.name === "Rahul"
);

console.log("Rahul Index:", index);

const includesStudent =
studentNames.includes("Priya");

console.log(
    "Contains Priya:",
    includesStudent
);


/********************************************************************
 * ARRAY FLATTENING
 ********************************************************************/

const nestedArray =
[
    [1, 2],
    [3, 4],
    [5, 6]
];

const flatArray =
nestedArray.flat();

console.log(
    "Flattened Array:",
    flatArray
);


/********************************************************************
 * DUPLICATE REMOVAL
 ********************************************************************/

const numbers =
[1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers =
[...new Set(numbers)];

console.log(
    "Unique Numbers:",
    uniqueNumbers
);