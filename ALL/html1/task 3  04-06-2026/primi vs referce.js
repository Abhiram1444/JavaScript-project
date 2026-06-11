// Primitive
let score1 = 90;
let score2 = score1;

score2 = 95;

console.log("score1:", score1);
console.log("score2:", score2);

// Reference
let user1 = {
    name: "Abhiram"
};

let user2 = user1;

user2.name = "Reddy";

console.log("user1:", user1.name);
console.log("user2:", user2.name);