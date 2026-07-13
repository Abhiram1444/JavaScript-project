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

// recursive function with factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base Case
    }

    return n * factorial(n - 1);
}

console.log("Factorial of 5 =", factorial(5));

// fibonacci series
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));