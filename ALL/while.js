// Example: while loop
let count = 1;
console.log("=== while loop ===");
while (count <= 3) { // Runs while condition is true
    console.log("Count is:", count);
    count++;
}

// Example: do...while loop
let num = 1;
console.log("\n=== do...while loop ===");
do {
    console.log("Number is:", num);
    num++;
} while (num <= 3); // Condition checked after execution

// Example: Infinite loop with break
console.log("\n=== Infinite loop with break ===");
let i = 0;
while (true) { // Infinite loop
    console.log("i =", i);
    i++;
    if (i === 5) { // Exit condition
        console.log("Breaking out of loop...");
        break; // Stops the loop immediately
    }
}
