let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function startTimer() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    running = false;
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

function updateDisplay() {
    let milliseconds = elapsedTime % 1000;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    milliseconds = pad(milliseconds, 3);
    seconds = pad(seconds, 2);
    minutes = pad(minutes, 2);
    hours = pad(hours, 2);

    document.querySelector('.Timer-display').textContent = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliseconds;
}

function pad(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('pause-timer').addEventListener('click', pauseTimer);
document.getElementById('Reset-timer').addEventListener('click', resetTimer);
