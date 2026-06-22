function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

function showMessage() {
    console.log("Scroll Event");
}

window.addEventListener(
    "scroll",
    throttle(showMessage, 1000)
);

// debouncing 
function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function searchData() {
    console.log("Searching...");
}

//document.getElementById("name").addEventListener(
    "input",
    debounce(searchData, 1000)
//);

//callback function
function greet(name, callback) {
    console.log(`Hello ${name}`);

    callback();
}

function sayBye() {
    console.log("Good Bye");
}

greet("Abhiram", sayBye);

// promises
const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Error Loading Data");
    }
});