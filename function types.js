// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Recursive Function
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}



console.log(greet("Abhiram"));
console.log(add(10, 20));
console.log(multiply(5, 4));
console.log(factorial(5));


