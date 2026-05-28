function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Execution completed.");
    }
}

divide(10, 2); // ✅ Works
divide(10, 0); // ❌ Throws custom error