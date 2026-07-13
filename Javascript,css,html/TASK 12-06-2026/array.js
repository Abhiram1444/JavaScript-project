// accessing array elemnts
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[2]); 

//Multidimensionl arrays
let students = [
    ["Abhiram", 101, "CSE"],
    ["Ravi", 102, "ECE"],
    ["Priya", 103, "IT"]
];

console.log(students[0]);      
console.log(students[0][0]);   
console.log(students[1][2]);   

// adding elemnts in beggining using unshift()

let fruits1 = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits1);

//Adding Elements at the End using push()
let fruits2 = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits2);

// adding elements at a position using splice()

let fruits3 = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana", "Orange");

console.log(fruits3);

// accessing last element
let colors = ["Red", "Green", "Blue"];

console.log(colors[colors.length - 1]);

// accesiing using loop
let fruits4 = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits4.length; i++) {
    console.log(fruits4[i]);
}

// accessimg using for of 
let fruits5= ["Apple", "Banana", "Mango"];

for(let fruit5 of fruits5) {
    console.log(fruit5);
}

// Removing elements from arrys from beginning using shift()
let fruits6 = ["Apple", "Banana", "Mango"];

fruits6.shift();

console.log(fruits6);

//Removing elements from arrys from beginning using pop()
let fruits7 = ["Apple", "Banana", "Mango"];

fruits7.pop();

console.log(fruits7);

// finding Array Length
let employees1 = ["abhi","ram","reddy"];
console.log("Total Employees:", employees1.length);
//
let employees = ["Ravi", "Priya", "Kiran", "Rahul"];

console.log("Total Employees:", employees.length);

//include()
let users = ["Admin", "Manager", "Employee"];

if(users.includes("Admin")){
    console.log("Admin Found");
}

// indexof()
let fruitss= ["Apple", "Banana", "Mango", "Banana","Banana"];

//console.log(fruitss.indexOf("Banana"));
console.log(fruitss.indexOf("Orange"));
console.log(fruitss.indexOf("GRAPES"));

//LastindexOF()

let fruits9 = ["Apple", "Banana", "Mango", "Banana"];

console.log(fruits9.lastIndexOf("Banana"));

//Making an Array Empty
//method 1 assign empty array
let fruits10 = ["Apple", "Banana", "Mango"];

fruits10= [];

console.log(fruits10);

//method 2 setting length to 0
let fruits11 = ["Apple", "Banana", "Mango"];

fruits11.length = 0;

console.log(fruits11);

//method3 splice
let fruits12 = ["Apple", "Banana", "Mango"];

fruits12.splice(0, fruits12.length);

console.log(fruits12);

// method4 pop() loop
let fruits13 = ["Apple", "Banana", "Mango"];

while(fruits13.length > 0){
    fruits13.pop();
}

console.log(fruits13);

// combining arrays
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let result = a.concat(b, c);

console.log(result);

//spread operator
let frontend = ["HTML", "CSS"];
let backend = ["NodeJS", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(fullStack);

//

