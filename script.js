var startTimerButton = document.getElementById('startTimerButton');
var stopTimerButton = document.getElementById('stopTimerButton');
var resetTimerButton = document.getElementById('resetTimerButton');
var breakFor10MinsButton = document.getElementById('breakFor10MinsButton');

let minute = 25;
let second = 0;
let timer = false;

const sound = new Audio('gong.mp3');

startTimerButton.addEventListener("click", startTimer);
stopTimerButton.addEventListener("click", stopTimer);
resetTimerButton.addEventListener("click", resetTimer);
breakFor10MinsButton.addEventListener("click", breakFor10Mins);

function startTimer() {
    if (!timer) {
        timer = true;
        stopWatch();
    }
}

function stopTimer() {
    timer = false;
}

function resetTimer() {
    timer = false;
    minute = 25;
    second = 0;
    document.getElementById('min').innerHTML = "25";
    document.getElementById('sec').innerHTML = "00";
    document.body.style.backgroundColor = "";
}

function breakFor10Mins() {
    timer = true;
    minute = 10;
    second = 0;
    document.getElementById('min').innerHTML = "10";
    document.getElementById('sec').innerHTML = "00";
    document.body.style.backgroundColor = "rgb(83, 245, 170)";
    stopWatch();
}

function stopWatch() {
    if (!timer) return;

    if (second === 0) {
        if (minute === 0) {
            timer = false;
            sound.play();
            return;
        } else {
            minute--;
            second = 59;
        }
    } else {
        second--;
    }

    let minString = minute < 10 ? '0' + minute : minute;
    let secString = second < 10 ? '0' + second : second;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;

    setTimeout(stopWatch, 1000);
}
