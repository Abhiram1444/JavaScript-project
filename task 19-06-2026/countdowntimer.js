function startTimer() {

    let count = 10;

    let timer = setInterval(() => {

        document.getElementById("timer").textContent = count;

        count--;

        if (count < 0) {
            clearInterval(timer);
            document.getElementById("timer").textContent = "Time's Up!";
        }

    }, 1000);
}


// stopwatch application
let seconds = 0;
let interval;

function start() {

    interval = setInterval(() => {
        seconds++;
        document.getElementById("display").textContent = seconds;
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    seconds = 0;
    document.getElementById("display").textContent = seconds;
}