// Question array
var quizQuestions = [
    "What is the correct way to declare a variable in JavaScript?",
    "Which of the following methods is used to add an element to an array in JavaScript?",
    "How do you write a comment in JavaScript?",
    "What does the === operator do in JavaScript?"
];

// right answer array
var rightAnswers = [
    "let x;",
    "push()",
    "// This is a comment",
    "Compares two values with strict equality."
];

// wrong answer array
var wrongAnswers = [
    ["x();", "variable x;", "x = variable;"],
    ["add()", "insertElement()", "addToEnd()"],
    ["~This is a comment~", "/* This is a comment */", "* This is a comment *"],
    ["Assigns a value to a variable.", "Checks if a variable is defined.", "Performs a logical OR operation."]
];

// Value set for my tracked variables
let timeLeft = 40;
let timerInterval;
let currentQuestions = 0;
let score = 0;

// Timer functions
function updateTimer() {
    document.getElementById("timer").innerText = `${timeLeft} `;
}

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

// Function to start the quiz
function startQuiz() {
    hideWelcomeContainer();
    showQuestion();
    startTimer();
}

// startQuiz event listener
document.getElementById("start").addEventListener("click", startQuiz);


// Function to hide the container with welcome elements
function hideWelcomeContainer() {
    document.querySelector('.welcome-text').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
}

// Array Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Question Elemtents
function showQuestion() {
    let currentQuestion = quizQuestions[currentQuestions];
    let currentChoices = wrongAnswers[currentQuestions].concat(rightAnswers[currentQuestions]);

    // Shuffle the choices to display in random order
    currentChoices = shuffleArray(currentChoices);

    // Display question and choices in your HTML
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = '';

    const questionElement = document.createElement("h3");
    questionElement.textContent = currentQuestion;
    questionContainer.appendChild(questionElement);

    currentChoices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => checkAnswer(choice));
        questionContainer.appendChild(button);
    });
}

// Right Answer Check
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === rightAnswers[currentQuestions]) {
        score++;
    }

    currentQuestions++;

    if (currentQuestions < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval)
    console.log(score); }


// Bind wrong answers to a vairable that - from timer

// Make vairable that displays when on the "High Score" page 

