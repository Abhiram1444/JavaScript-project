//global scope
var language = "JavaScript";

function display() {
    console.log("Inside Function:", language);
}

display();
console.log("Outside Function:", language);

// 
var language = "JavaScript";

function display() {
    console.log("Inside Function:", language);
}

display();
console.log("Outside Function:", language);

//function scope
function greet() {
    let message = "Hello World";
    console.log(message);
}

greet();

// block scope
if (true) {
    let city = "Hyderabad";
    const state = "Telangana";

    console.log(city);
    console.log(state);
}

// recursive vs iterative
function reverseString(str) {
    if (str === "") {
        return "";
    }

    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

//iterate 
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));

//