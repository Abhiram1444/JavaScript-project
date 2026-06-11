let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// for loop 
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

//while loop
let i = 3;

while (i <= 5) {
    console.log("Count:", i);
    i++;
}

// do while loop
let a = 2;

do {
    console.log("Count:", a);
    a++;
} while (a <= 5);

//for in loop
let employee = {
    name: "Abhiram",
    role: "Associate Software Engineer",
    experience: "6 Months"
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}

//for off loop
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}