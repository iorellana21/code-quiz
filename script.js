// get main-page
var mainPage = document.querySelector("#main-page");
// get quiz-page
var quizPage = document.querySelector("#quiz-page");
// get user-page
var userPage = document.querySelector("#user-page");
// get highscore-page
var highscorePage = document.querySelector("#highscore-page");

// get Start Quiz button
var startBtn = document.querySelector("#startBtn");
// get View Highscores button
var viewBtn = document.querySelector("#viewBtn");
// get Submit button
var submitBtn = document.querySelector("#submitBtn");
// get Main Page button
var mainPageBtn = document.querySelector("#mainPageBtn");

// get timer
var timerId = document.querySelector("#timer");
// set timer
var timer = 60;

// score count
var scoreCount = 0;
// total score
var totalScore = document.querySelector("#total-score");

// variable to display question
var question = document.querySelector("#question");
// variable to display choices
var container = document.querySelector("#container");

// user initials
var userInput = document.querySelector("#user-input");
// highscore
var highScore = document.querySelector("#highscore-table");

// keep track of questions
var questionIndex = 0;
// create array of objects containing questions and correct answer
var questionArr = [
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answerIndex: 3, //"4. all the above"
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        question: "String Values must be enclosed within ____ when being assigned to variables",
        answerIndex: 2, //"3. quotes"
        choices: ["commas", "curly brackets", "quotes", "parenthesis"]
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        answerIndex: 2, //"3. parenthesis"
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answerIndex: 2, //"3. alert"
        choices: ["strings", "booleans", "alert", "numbers"]
    },
    {
        question: "A very useful tool for users during development and debugging for printing content to the debugger is:",
        answerIndex: 3, //"4. console log"
        choices: ["javascript", "terminal/bash", "for loops", "console log"]
    }
];

// function to start timer when Start Quiz button is clicked
function startQuiz() {
    // When Start Quiz is clicked, toggle .inactive class to main-page && quiz-page
    startBtn.addEventListener("click", function (event) {
        console.log("Start Quiz button has been clicked");
        // update page with quiz page by applying/removing .inactive class
        mainPage.classList.toggle("inactive");
        quizPage.classList.toggle("inactive");

        // timer
        var questionInterval = setInterval(function () {
            // assign timer to timerId to display on page
            timerId.textContent = timer;
            // check if timer reaches 0 of if question asked reach total amount of questions
            if (timer === 0 || questionIndex === questionArr.length) {
                // clear timerId
                timerId.textContent = "";
                // clear question
                question.textContent = "";
                // clear choices
                container.textContent = "";
                // stop timer
                clearInterval(questionInterval);
                // redirecting to High Scores page
                document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/highscore.html";
            }
            // if false, subtract timer by 1 until reaches 0 or questions asked reach total questions
            timer--;
        }, 1000);

        // display question and choices
        showQuestions();
    });
}

// function to show questions when Start Quiz button is clicked
function showQuestions() {

    // make both variables empty
    question.textContent = "";
    container.textContent = "";

    // create h2 tag to display question, append to #question and display current question to h2 tag
    var questionTag = document.createElement("h2");
    question.appendChild(questionTag);
    questionTag.textContent = questionArr[questionIndex].question;

    // variable to contain answer for current question
    var correctAnswer = questionArr[questionIndex].answerIndex;

    // create ordered list and append to page
    var listTag = document.createElement("ol");
    container.appendChild(listTag);

    // loop to create li tags to display number of choices per question based on questionIndex
    for (var i = 0; i < questionArr[questionIndex].choices.length; i++) {

        // create li tag to hold choice, append to ordered list and display each choice
        var choiceTag = document.createElement("li");
        listTag.appendChild(choiceTag);
        choiceTag.textContent = questionArr[questionIndex].choices[i];

        // what happens when one of the choices has been selected
        choiceTag.addEventListener("click", function (event) {
            console.log("QUESTION");

            // variable to contain the users choice
            var userChoice = event.target.textContent;
            // show user choice
            console.log("User chose: " + userChoice);
            // show correct answer
            console.log("correct answer: " + questionArr[questionIndex].choices[correctAnswer]);

            if (userChoice === questionArr[questionIndex].choices[correctAnswer]) {
                console.log("correct!");
                scoreCount++;
                console.log("Score:  " + scoreCount);
            }
            else {
                console.log("incorrect!");
            }
            // increase questionIndex by 1
            questionIndex++;
            // rerun function until timer reaches 0 or questionIndex reaches total questions
            showQuestions();
        });
    }
}

// function when Submit button is clicked
function HighScores() {
    submitBtn.addEventListener("click", function (event) {
        // update page with highscore page by applying/removing .inactive class
        userPage.classList.toggle("inactive");
        highscorePage.classList.toggle("inactive");

        // tutoring session
        var userInitials = userInput.value;
        console.log(userInitials);

        var totalScore = scoreCount;

        // empty array to have score and initials pushed into
        var array = JSON.parse(localStorage.getItem("users")) || [];

        var user = {
            score: totalScore,
            initials: userInitials
        };

        array.push(user);

        localStorage.setItem("users", JSON.stringify(array));

        // create ordered list and append to page to contain user initials and score
        var listScore = document.createElement("ol");
        highScore.appendChild(listScore);
        listScore.style.display = "block";
        listScore.style.margin = "0 auto";
        listScore.style.width = "fit-content";


        for (var i = 0; i < array.length; i++) {

            // assign score and initials values coming from array
            var userScore = array[i].score;
            var userInitials = array[i].initials;

            // create li tag, append to ordered list
            var userInfo = document.createElement("li");
            listScore.appendChild(userInfo);
            userInfo.textContent = userInitials + " - " + userScore;
        }
    });
}

// function when View Highscores button is clicked - SEE IF YOU CAN REDIRECT TO HIGHSCORE TABLE PAGE
function viewHighScores() {
    viewBtn.addEventListener("click", function (event) {
        // redirect to High Scores page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/highscore.html";
    });
}

// function when Back to Main page button is clicked - THIS IS GOOD AND DOES NOT NEED TO BE TOUCHED
function backToMainPage() {
    mainPageBtn.addEventListener("click", function (event) {
        // redirect back to index.html page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/index.html";
    });
}