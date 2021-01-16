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
// set timer
var timer = 45;

// score count
var scoreCount = 0;
// total score
var totalScore = document.querySelector("#total-score");

// user initials
var userInput = document.querySelector("#user-input");

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
        choices: ["Javascript", "terminal/bash", "for loops", "console log"]
    }
];
// display array to console
console.log(questionArr);
//------------



// function when Start Quiz button is clicked
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
                // if either are true
                // clear timer
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



function showQuestions() {
    console.log("call quiz function");

    // text to display question
    var question = document.querySelector("#question");
    // container for questions
    var container = document.querySelector("#container");

    // make sure both are empty
    question.textContent = "";
    container.textContent = "";

    // create h2 tag to hold question, append to page and display question
    var questionTag = document.createElement("h2");
    question.appendChild(questionTag);
    questionTag.textContent = questionArr[questionIndex].question;

    // create ordered list and append to page
    var listTag = document.createElement("ol");
    container.appendChild(listTag);

    // loop to create li tags to display number of choices per question based on questionIndex
    for (var i = 0; i < questionArr[questionIndex].choices.length; i++) {
        
        // create li tag to hold choice, append to ordered list and display choice
        var choiceTag = document.createElement("li");
        listTag.appendChild(choiceTag);
        choiceTag.textContent = questionArr[questionIndex].choices[i];

        // what happens when one of the choices has been selected
        choiceTag.addEventListener("click", function (event) {
            // show which choice was selected and correct answer
            console.log(event.target.textContent);
            console.log(questionArr[questionIndex].choices[3]);

            if(choiceTag.textContent === questionArr[questionIndex].choices[3].textContent){
                console.log("correct!");
            }

            // increase questionIndex by 1
            questionIndex++;
            // rerun function until timer reaches 0 or questionIndex reaches total questions
            showQuestions();
        });
    }
}






// function when View Highscores button is clicked - SEE IF YOU CAN REDIRECT TO HIGHSCORE TABLE PAGE
function viewHighScores() {
    viewBtn.addEventListener("click", function (event) {
        // redirect to High Scores page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/highscore.html";
    });
}

// function when Submit button is clicked - THIS IS GOOD AND DOES NOT NEED TO BE TOUCHED
function HighScores() {
    submitBtn.addEventListener("click", function (event) {
        // update page with highscore page by applying/removing .inactive class
        userPage.classList.toggle("inactive");
        highscorePage.classList.toggle("inactive");
    });
}

// function when Back to Main page button is clicked - THIS IS GOOD AND DOES NOT NEED TO BE TOUCHED
function backToMainPage() {
    mainPageBtn.addEventListener("click", function (event) {
        // redirect back to index.html page
        document.location.href = "/Users/fish/Desktop/ru-coding-bootcamp/my-ru-repos/code-quiz/index.html";
    });
}