// promise 
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

//async/await
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function fetchData() {
    const result = await getData();
    console.log(result);
}

fetchData();

// eroor handling using catch
async function example() {
    try {
        const result = await Promise.resolve("Success");
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

example();

//
async function example() {
    try {
        const result = await Promise.reject("Something went wrong");
        console.log(result);
    } catch(error) {
        console.log("Caught:", error);
    }
}

example();

//object destructuring
const student = {
    name: "Abhiram",
    age: 22,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

const { name: studentName } = student;

console.log(studentName);
const { city = "Hyderabad" } = student;

console.log(city);

// array destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a);
console.log(c);
