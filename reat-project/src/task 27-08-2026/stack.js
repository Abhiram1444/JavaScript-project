console.log("1. Start");

setTimeout(() => {
  console.log("2. setTimeout - Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise - Microtask");
});

async function example() {
  console.log("4. Inside async function");

  await Promise.resolve();

  console.log("5. After await - Microtask");
}

example();

console.log("6. End");