// ElementById's
var quizStartScreen = document.getElementById('quiz-box');
var quizEndScreen = document.getElementById('end-screen');
var realQuestion = document.getElementById('real-question');
var questionBox = document.getElementById('quiz-question');
var questionText = document.getElementById('question-number');
var answerText = document.getElementById('question-answers-list');
var userScoreDisplayed = document.getElementById('userscorefinal');
var scoresScreenView = document.getElementById('scores-screen');
var clearScores = document.getElementById('clear-scores');
var viewScores = document.getElementById('see-scores');
var scoresList = document.getElementById('scores-list');
let scoresData = [];

// Timer seconds display
var timerSec = document.getElementById('timer');

// Scoring system
let userScore = 0;
const onePoint = 1;

// Question 1 + answers
var question1 = document.getElementById('quiz-question');
var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');
var q1a3 = document.getElementById('q1a3');
var q1a4 = document.getElementById('q1a4');

// Question 2 + answers
var question2 = document.getElementById('quiz-question2');
var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');
var q2a3 = document.getElementById('q2a3');
var q2a4 = document.getElementById('q2a4');

// Question 3 + answers
var question3 = document.getElementById('quiz-question3');
var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');
var q3a3 = document.getElementById('q3a3');
var q3a4 = document.getElementById('q3a4');

// Question 4 + answers
var question4 = document.getElementById('quiz-question4');
var q4a1 = document.getElementById('q4a1');
var q4a2 = document.getElementById('q4a2');
var q4a3 = document.getElementById('q4a3');
var q4a4 = document.getElementById('q4a4');


// Restart button ID
var restartButton = document.getElementById('return');
var restartButton2 = document.getElementById('go-back');


// Starting time on clock
var timeLeftSec = 200;

function reload() {
    quizStartScreen.classList.add('hide');
    questionBox.classList.add('hide');
    quizEndScreen.classList.add('hide');
    scoresScreenView.classList.remove('hide');
    scoresScreenView.classList.remove('hide');
}

// Clear scores function
function clearAllScores() {
    localStorage.clear();
    console.log('Scores deleted!');
    scoresScreen();
};

// Restart game function
function restartGame() {
    quizStartScreen.classList.remove('hide');
    questionBox.classList.add('hide');
    quizEndScreen.classList.add('hide');
    scoresScreenView.classList.add('hide');
    timeLeftSec === 200;
};

function displayQuizEnd() {
    timeLeftSec === 200;
    questionBox.classList.add('hide');
    question4.classList.add('hide');
    quizEndScreen.classList.remove('hide');

    userScoreDisplayed.innerHTML = userScore;
    addScore(userScore);
};

function quizTimer() {
    var timerInterval = setInterval(function() {
        timeLeftSec--;
        timerSec.textContent = timeLeftSec
        if(timeLeftSec === 0) {
            // clearInterval(timerInterval);
            displayQuizEnd();
        }
    }, 1000)
};

function initializeQuestion2Wrong() {
    question1.classList.add('hide');
    question2.classList.remove('hide');
};

function wrongAnswer1() {
    timeLeftSec -= 30;
    initializeQuestion2Wrong();
};

function initializeQuestion3Wrong() {
    question2.classList.add('hide');
    question3.classList.remove('hide');
};

function wrongAnswer2() {
    timeLeftSec -= 30;
    initializeQuestion3Wrong();
};

function initializeQuestion4Wrong() {
    question3.classList.add('hide');
    question4.classList.remove('hide');
};

function wrongAnswer3() {
    timeLeftSec -= 30;
    initializeQuestion4Wrong();
};

function wrongAnswer4() {
    timeLeftSec -= 30;
    displayQuizEnd();
};

function initializeQuestion2() {
    question1.classList.add('hide');
    question2.classList.remove('hide');
    userScore += onePoint;
};

function initializeQuestion3() {
    question2.classList.add('hide');
    question3.classList.remove('hide');
    userScore += onePoint;
};

function initializeQuestion4() {
    question3.classList.add('hide');
    question4.classList.remove('hide');
    userScore += onePoint;
};

function addScore() {
    scoresData.push(userScore);
    console.log('score has been pushed to array');

    localStorage.setItem('scoresData', JSON.stringify(scoresData));
    console.log('score added');
};

function q4Correct() {
    userScore += onePoint;
    displayQuizEnd();
};

function startQuiz() {
    quizStartScreen.classList.add('hide');
    currentQuestion = 0
    questionBox.classList.remove('hide');
    quizTimer();
};

function scoresScreen() {
    quizEndScreen.classList.add('hide');
    scoresScreenView.classList.remove('hide')

    var savedScores = JSON.parse(localStorage.getItem('scoresData'));

    console.log('Scores have been parsed');

    console.log(savedScores);

    scoresList.innerHTML = '';

    for (var i = 0; i < savedScores.length; i++) {
        console.log('scores processed');

        var uniqueScore = savedScores[i];

        console.log('scores have been indexed')
    
        var scoreP = document.createElement('p');
        scoreP.textContent = uniqueScore;
        scoreP.setAttribute('data-index', i);

        scoresList.appendChild(scoreP);
        console.log('score added to page');
    }
}

quizStartScreen.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartGame);
restartButton2.addEventListener('click', restartGame);
viewScores.addEventListener('click', scoresScreen);
clearScores.addEventListener('click', clearAllScores);

// Correct answers
q1a4.addEventListener('click', initializeQuestion2)
q2a2.addEventListener('click', initializeQuestion3)
q3a1.addEventListener('click', initializeQuestion4)
q4a4.addEventListener('click', () => {
    q4Correct();
});

q1a1.addEventListener('click', wrongAnswer1);
q1a2.addEventListener('click', wrongAnswer1);
q1a3.addEventListener('click', wrongAnswer1);

q2a1.addEventListener('click', wrongAnswer2);
q2a3.addEventListener('click', wrongAnswer2);
q2a4.addEventListener('click', wrongAnswer2);

q3a2.addEventListener('click', wrongAnswer3);
q3a3.addEventListener('click', wrongAnswer3);
q3a4.addEventListener('click', wrongAnswer3);

q4a1.addEventListener('click', wrongAnswer4);
q4a2.addEventListener('click', wrongAnswer4);
q4a3.addEventListener('click', wrongAnswer4);