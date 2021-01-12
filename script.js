// get button
var startBtn = document.querySelector("#startBtn");

// get timer id
var timerId = document.querySelector("#timer");

// timer
var timer = 10;

// build HTML page from here before Start Quiz is clicked
// 




// addEventListener on startBtn
startBtn.addEventListener("click", function (event) {
    console.log("Start Quiz has been clicked");

    startTimer();

});


function startTimer() {
    timerId.textContent = timer;
    console.log("timer starts");

    var timerInterval = setInterval(function () {
        timer--;
        // console.log("timer:" + timer);
        timerId.textContent = timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            console.log("timer has reached " + timer);
        }
    }, 1000);
}