// settimeout()
console.log("Start");

setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

console.log("End");

//cleartimeout()
let notification = setTimeout(() => {
    console.log("Download Complete");
}, 5000);

clearTimeout(notification);

//set interval()
setInterval(() => {
    console.log("Hello");
}, 2000);

//clearinterval()
let count = 0;

let intervalId = setInterval(() => {
    count++;

    console.log(count);

    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);

// synchrounous execution
console.log("A");
console.log("B");
console.log("C");

//asynchrous execution
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");