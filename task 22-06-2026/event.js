// event bubblng
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Button Clicked");
});

// event capturing
document.getElementById("grandparent").addEventListener(
    "click",
    () => {
        console.log("Grandparent Capturing");
    },
    true
);

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("Parent Capturing");
    },
    true
);

document.getElementById("child").addEventListener(
    "click",
    () => {
        console.log("Button Capturing");
    },
    true
);

// event delegation
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let count = 1;

addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Clicked:", event.target.textContent);
    }
});

//throttling
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