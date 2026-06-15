const numbers = [10, 20, 30, 40, 50];

// for loop
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
console.log(sum1);

// for...of
let sum2 = 0;
for (let num of numbers) {
    sum2 += num;
}
console.log(sum2);

// forEach
let sum3 = 0;
numbers.forEach(num => {
    sum3 += num;
});
console.log(sum3);

// objects
const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 50000
};

console.log(employee);

// accessing objects
const employee = {
    name: "Rahul",
    salary: 50000
};

console.log(employee.name);
console.log(employee.salary);