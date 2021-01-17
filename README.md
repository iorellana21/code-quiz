# Code Quiz Challenge
## Description
Coding Quiz Challenge application where user goes through multiple choice questions before timer runs out. Incorrect answers will deduct timer by 5 seconds. At the end, user inputs initials and a score table appears - displaying user initials and users score.

**Currently working on displaying total score when user is entering initials and on scores page
## What Was Done
* Build HTML pages with different templates
* Build CS page
* Build JS page
* Have questions, choices and correct answer contained within an array of objects
* Create multiple functions
    * startQuiz()
        * Timer and quiz starts
    * showQuestions()
        * display questions and choices; incremet score or decrement timer depending on user selection
    * highScores()
        * store user initials and redirect to scores page
    * viewHighScores()
        * button to redirect to scores page
    * backToMainPage
        * button to return to main page
* Use localStorage

---
## Process
User can click 'View Scores' button or 'Start Quiz' button.
* View Scores
    * Redirects user to the scores page
* Start Quiz button:

    1. Timer/Quiz starts
    2. First question appears, waits for user selection
        * if user chooses correct, score will increase by 1
        * if user chooses incorrect, score does not increase, timer is deducted by 5 seconds
    3. Quiz continues timer reaches 0 or all questions have been asked
    4. User score is shown on the page and ask for user initials
    5. List of all users and their scores display on the page
    6. Can click Return to Main Page button to start again

## generatePassword
![alt text](https://raw.githubusercontent.com/iorellana21/code-quiz/main/assets/code-quiz-main-page.png "code-quiz-main-page")

---
## Credits
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/)
* [Google](https://www.google.com/)

---
## Links
#### Live URL
* https://iorellana21.github.io/code-quiz/
#### GitHub URL
* https://github.com/iorellana21/code-quiz