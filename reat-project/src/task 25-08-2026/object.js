const user = {
  name: "Abhiram",
  age: 22,
  city: "Hyderabad",
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    state: "Telangana"
  }
};

// 1. Object Destructuring
const { name, age } = user;
console.log(name); // Abhiram
console.log(age);  // 22


// 2. Object.keys()
console.log(Object.keys(user));
// ["name", "age", "city", "skills", "address"]


// 3. Object.values()
console.log(Object.values(user));
// ["Abhiram", 22, "Hyderabad", Array, Object]


// 4. Object.entries()
console.log(Object.entries(user));
// Converts object into key-value pairs


// 5. Object.assign()
const updatedUser = Object.assign({}, user, {
  city: "Bangalore"
});

console.log(updatedUser);


// 6. Optional Chaining (?.)
console.log(user.address?.state); // Telangana
console.log(user.address?.pincode); // undefined


// 7. Nullish Coalescing (??)
const pincode = user.address?.pincode ?? "Not Available";

console.log(pincode); // Not Available


// 8. Spread Operator (...)
const newUser = {
  ...user,
  country: "India"
};

console.log(newUser);


// 9. Rest Operator (...)
const { name: userName, ...remainingDetails } = user;

console.log(userName); // Abhiram
console.log(remainingDetails);