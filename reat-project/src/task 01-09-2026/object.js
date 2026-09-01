// Creating an Object
const student = {
    name: "Abhiram",
    age: 22,
    course: "JavaScript",
    
    // Nested Object
    address: {
        city: "Hyderabad",
        state: "Telangana"
    },

    marks: {
        html: 85,
        css: 80,
        javascript: 90
    }
};

// Accessing Object Properties
console.log(student.name);
console.log(student.address.city);
console.log(student.marks.javascript);


// Object Destructuring
const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);


// Nested Object Destructuring
const { address: { city, state } } = student;

console.log(city);
console.log(state);


// Spread Operator - Copy and Update Object
const updatedStudent = {
    ...student,
    age: 23,
    course: "React"
};

console.log(updatedStudent);


// Rest Operator
const { name: studentName, ...otherDetails } = student;

console.log(studentName);
console.log(otherDetails);


// Object.keys()
console.log(Object.keys(student));


// Object.values()
console.log(Object.values(student));


// Object.entries()
console.log(Object.entries(student));


// Optional Chaining
console.log(student.address?.city);
console.log(student.contact?.phone);


// Nullish Coalescing
const phone = student.contact?.phone ?? "Phone number not available";

console.log(phone);


// Updating Nested Object
student.address.city = "Bangalore";
student.marks.javascript = 95;

console.log(student);