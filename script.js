var quizStartScreen = document.getElementById('quiz-box');
var quizEndScreen = document.getElementById('end-screen');
var realQuestion = document.getElementById('real-question');
var questionBox = document.getElementById('quiz-question');
var questionText = document.getElementById('question-number');
var answerText = document.getElementById('question-answers-list');
var userScoreDisplayed = document.getElementById('userscorefinal');

var question1 = document.getElementById('quiz-question');
var q1a1 = document.getElementById('q1a1')
var q1a2 = document.getElementById('q1a2')
var q1a3 = document.getElementById('q1a3')
var q1a4 = document.getElementById('q1a4')

var question2 = document.getElementById('quiz-question2');
var q2a1 = document.getElementById('q2a1')
var q2a2 = document.getElementById('q2a2')
var q2a3 = document.getElementById('q2a3')
var q2a4 = document.getElementById('q2a4')

var question3 = document.getElementById('quiz-question3');
var q3a1 = document.getElementById('q3a1')
var q3a2 = document.getElementById('q3a2')
var q3a3 = document.getElementById('q3a3')
var q3a4 = document.getElementById('q3a4')

var question4 = document.getElementById('quiz-question4');
var q4a1 = document.getElementById('q4a1')
var q4a2 = document.getElementById('q4a2')
var q4a3 = document.getElementById('q4a3')
var q4a4 = document.getElementById('q4a4')

var timerSec = document.getElementById('timer');
var restartButton = document.getElementById('return');
var clearScores = document.getElementById('clear-scores');

var timeLeftSec = 200;
var userScore = 0;

function clearAllScores() {
    localStorage.clear();
}

function restartGame() {
    quizStartScreen.classList.remove('hide');
    questionBox.classList.add('hide');
    quizEndScreen.classList.add('hide');
}

function displayEnd() {
    questionBox.classList.add('hide');
    quizEndScreen.classList.remove('hide');
}

function displayQuizEnd() {
    question4.classList.add('hide');
    quizEndScreen.classList.remove('hide');
}

function quizTimer() {
    var timerInterval = setInterval(function() {
        timeLeftSec--;
        timerSec.textContent = timeLeftSec
        if(timeLeftSec === 0) {
            clearInterval(timerInterval);
            displayEnd();
        }
    }, 1000)
}

function initializeQuestion2Wrong() {
    question1.classList.add('hide');
    question2.classList.remove('hide');
}
function wrongAnswer1() {
    timeLeftSec -= 30;
    initializeQuestion2Wrong();
}

function initializeQuestion3Wrong() {
    question2.classList.add('hide');
    question3.classList.remove('hide');
}
function wrongAnswer2() {
    timeLeftSec -= 30;
    initializeQuestion3Wrong();
}

function initializeQuestion4Wrong() {
    question3.classList.add('hide');
    question4.classList.remove('hide');
}
function wrongAnswer3() {
    timeLeftSec -= 30;
    initializeQuestion4Wrong();
}

function wrongAnswer4() {
    timeLeftSec -= 30;
    displayQuizEnd();
}

function initializeQuestion2() {
    question1.classList.add('hide');
    question2.classList.remove('hide');
    userScore + 1;
}

function initializeQuestion3() {
    question2.classList.add('hide');
    question3.classList.remove('hide');
    userScore + 1;
}

function initializeQuestion4() {
    question3.classList.add('hide');
    question4.classList.remove('hide');
    userScore + 1;
}

function startQuiz() {
    quizStartScreen.classList.add('hide');
    currentQuestion = 0
    questionBox.classList.remove('hide');
    quizTimer();
}

quizStartScreen.addEventListener('click', startQuiz)
restartButton.addEventListener('click', restartGame)
clearScores.addEventListener('click', clearAllScores)

q1a4.addEventListener('click', initializeQuestion2)
q2a2.addEventListener('click', initializeQuestion3)
q3a1.addEventListener('click', initializeQuestion4)
q4a4.addEventListener('click', displayQuizEnd)

q1a1.addEventListener('click', wrongAnswer1)
q1a2.addEventListener('click', wrongAnswer1)
q1a3.addEventListener('click', wrongAnswer1)

q2a1.addEventListener('click', wrongAnswer2)
q2a3.addEventListener('click', wrongAnswer2)
q2a4.addEventListener('click', wrongAnswer2)

q3a2.addEventListener('click', wrongAnswer3)
q3a3.addEventListener('click', wrongAnswer3)
q3a4.addEventListener('click', wrongAnswer3)

q4a1.addEventListener('click', wrongAnswer4)
q4a2.addEventListener('click', wrongAnswer4)
q4a3.addEventListener('click', wrongAnswer4)

userScoreDisplayed.innerHTML = userScore.text;