//Normal copy
const person1 = {
    name: "Abhiram",
    age: 22
};

const person2 = person1;

person2.age = 25;

console.log(person1.age); 
console.log(person2.age); 

// shallow copy using spread operator
const person3 = {
    name: "Abhiram",
    age: 22
};

const person4 = { ...person3 };

person4.age = 30;

console.log(person3.age);
console.log(person4.age); 

// shallow copy using object.assign()
const person11 = {
    name: "Abhiram",
    age: 22
};

const person22 = Object.assign({}, person11);

person22.age = 35;

console.log(person11.age); 
console.log(person22.age); 

// deep copy
const employee = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};

const copyEmployee = structuredClone(employee);

copyEmployee.address.city = "Mumbai";

console.log(employee.address.city); // Hyderabad
console.log(copyEmployee.address.city); // Mumbai

// using JSON
const employeeE = {
    id: 101,
    name: "John",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

const copiedEmployee =
    JSON.parse(JSON.stringify(employeeE));

copiedEmployee.address.city = "Mumbai";

console.log("Original:", employeeE);
console.log("Copied:", copiedEmployee);