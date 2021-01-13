// get Start Quiz button
var startBtn = document.querySelector("#startBtn");

// get Submit button
var submitBtn = document.querySelector("#submitBtn");

// get View Highscores button
var viewBtn = document.querySelector("#viewBtn");

// get Main Page button
var mainPageBtn = document.querySelector("#mainPageBtn");

// get main-page
var mainPage = document.querySelector("#main-page");

// get quiz-page
var quizPage = document.querySelector("#quiz-page");

// get user-page
var userPage = document.querySelector("#user-page");

// get high-score-page
var highscorePage = document.querySelector("#high-score-page");

// get timer
var timerId = document.querySelector("#timer");

// timer
var timer = 5;

// timerInterval
var timerInterval;






// function when Start Quiz button is clicked
function startQuiz() {
    console.log("Main Page");
    // When Start Quiz is clicked, toggle .inactive class to main-page && quiz-page
    startBtn.addEventListener("click", function (event) {
        console.log("Start Quiz button has been clicked");
        // update page with quiz page by applying/removing .inactive class
        mainPage.classList.toggle("inactive");
        quizPage.classList.toggle("inactive");
        // start timer
        startTimer();
    });
}





// function when View Highscores button is clicked
function viewHighScores() {
    // When View Highscores button is clicked
    viewBtn.addEventListener("click", function (event) {
        console.log("View Highscores has been clicked");
        // redirecting to High Scores page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/highscore.html";
        userPage.classList.toggle("inactive");
        highscorePage.classList.toggle("inactive");
    });
}






// function when Submit button is clicked
function HighScores() {
    console.log("timer has reached 0");
    // When Submit button is clicked, toggle .inactive class to user-page && high-score-page
    submitBtn.addEventListener("click", function (event) {
        // update page with highscore page by applying/removing .inactive class
        userPage.classList.toggle("inactive");
        highscorePage.classList.toggle("inactive");
    });
}


function backToMainPage() {
    // When Back to Main Page button is clicked, go back to index.html
    mainPageBtn.addEventListener("click", function (event) {
        // redirect back to index.html page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/index.html";
    });
}














// start timer
function startTimer() {
    timerId.textContent = timer;
    console.log("timer starts");

    timerInterval = setInterval(function () {
        timer--;
        // console.log("timer:" + timer);
        timerId.textContent = timer;
        if (timer === 0) {
            stopTimer();
        }
    }, 1000);
}


// stop timer
function stopTimer() {
    clearInterval(timerInterval);

    mainPageBtn.addEventListener("click", function (event) {
        // redirect to highscore page - user initial page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/highscore.html";
        userPage.classList.toggle("inactive");
        highscorePage.classList.toggle("inactive");
    });
}