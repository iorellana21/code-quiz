// get main-nav
var mainNav = document.querySelector("#main-nav");
// get sub-nav
var subNav = document.querySelector("#sub-nav");

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

// total score output
var totalScoreOutput = document.querySelector("#total-score");
// score count
var scoreCount = 0;
// total score
var totalScore = 0;

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
        mainNav.classList.remove("inactive");
        mainPage.classList.add("inactive");
        subNav.classList.add("inactive");
        quizPage.classList.remove("inactive");
        userPage.classList.add("inactive");
        highscorePage.classList.add("inactive");

        // timer
        var questionInterval = setInterval(function () {
            // assign timer to timerId to display on page
            timerId.textContent = timer;
            // check if timer reaches 0 of if question asked reach total amount of questions
            if (timer === 0 || questionIndex === questionArr.length) {
                // clear timerId
                timerId.textContent = "";
                // stop timer
                clearInterval(questionInterval);
                // redirecting to page for user initials
                highScores();
            }
            // if false, subtract timer by 1 until reaches 0 or questions asked reach total questions
            timer--;
        }, 1000);
        // display question and choices
        showQuestions();
    });
}

// function to show questions
function showQuestions() {
    // make both variables empty
    question.textContent = "";
    container.textContent = "";

    // check if all questions has been asked
    if (questionIndex < questionArr.length) {
        // create h2 tag to display question, append to #question and display current question to h2 tag
        var questionTag = document.createElement("h2");
        question.appendChild(questionTag);
        // display current question
        questionTag.textContent = questionArr[questionIndex].question;

        // create ordered list and append to page
        var listTag = document.createElement("ol");
        container.appendChild(listTag);

        // variable to contain answer for current question
        var correctAnswer = questionArr[questionIndex].answerIndex;

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
                    console.log("Current Score: " + scoreCount);
                }
                else {
                    console.log("incorrect!");
                    timer = timer - 5;
                }
                // increase questionIndex by 1
                questionIndex++;
                // update total score
                totalScore = scoreCount;
                // rerun function until timer reaches 0 or questionIndex reaches total questions
                showQuestions();
            });
        }
    }
    // else {
    //     highScores();
    // }
}

// function to navigate to userPage when quiz is over
function highScores() {
    // opens userPage for to display total score and ask for user input
    mainNav.classList.add("inactive");
    quizPage.classList.add("inactive");
    subNav.classList.remove("inactive");
    userPage.classList.remove("inactive");

    // display total score
    totalScoreOutput.textContent = totalScore;

    submitBtn.addEventListener("click", function (event) {

        userPage.classList.add("inactive");
        highscorePage.classList.remove("inactive");

        // store user initials
        var userInitials = userInput.value;
        // display initials
        console.log(userInitials);

        // create an array that checks if there is info in the 'users' key in localStorage
        // if no items, creates the first index in the array
        // if there are items, explands the array and adds another index
        var array = JSON.parse(localStorage.getItem("users")) || [];

        // object containing totalScore and userInitials
        var user = {
            score: totalScore,
            initials: userInitials
        };

        // push values from user object to array
        array.push(user);

        // store array data as an item inside 'users' key
        localStorage.setItem("users", JSON.stringify(array));

        // create ordered list and append to page to contain user initials and score
        var listScore = document.createElement("ol");
        highScore.appendChild(listScore);
        listScore.style.display = "block";
        listScore.style.margin = "0 auto";
        listScore.style.width = "fit-content";

        // loop through length of array and display user initials and score
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

// function when View Scores button is clicked
function viewHighScores() {
    viewBtn.addEventListener("click", function (event) {
        console.log("View Scores button has been clicked");
        // redirect to Scores page
        mainNav.classList.add("inactive");
        mainPage.classList.add("inactive");
        quizPage.classList.add("inactive");
        subNav.classList.remove("inactive");
        highscorePage.classList.remove("inactive");

    });
}

// function when Back to Main page button is clicked
function backToMainPage() {
    mainPageBtn.addEventListener("click", function (event) {
        console.log("Back to Main Page button has been clicked");
        // clear timerId
        timerId.textContent = "";
        // redirect back to mainPage
        mainNav.classList.remove("inactive");
        mainPage.classList.remove("inactive");
        subNav.classList.add("inactive");
        highscorePage.classList.add("inactive");
    });
}

startQuiz();
viewHighScores();
backToMainPage();