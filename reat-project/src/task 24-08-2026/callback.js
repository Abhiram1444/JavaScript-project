function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye! Have a nice day.");
}

greet("Abhiram", sayBye);