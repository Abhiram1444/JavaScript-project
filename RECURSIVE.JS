/**
 * Recursive function to calculate factorial
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial of n
 */
function factorial(n) {
    // Input validation
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new Error("Input must be an integer.");
    }
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    // Base case: factorial(0) = 1
    if (n === 0) {
        return 1;
    }

    // Recursive case: n! = n × (n-1)!
    return n * factorial(n - 1);
}

// Example usage with error handling
try {
    const num = 5;
    console.log(`Factorial of ${num} is: ${factorial(num)}`); // Output: 120
} catch (error) {
    console.error("Error:", error.message);
}
