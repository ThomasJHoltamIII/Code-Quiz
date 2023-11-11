

// Array of right answers
var rightAnswers = [
    "let x;",        // Correct answer for Question 1
    "To convert a string to an integer.", // Correct answer for Question 2
    "// This is a comment", // Correct answer for Question 3
    "Compares two values for equality without type coercion." // Correct answer for Question 4
  ];
  
// Wrong answer array
var wrongAnswers = [
    ["var x;", "variable x;", "x = variable;"], // Wrong answers for Question 1
    ["To print text to the console.", "To create a new array.", "To define a new function."], // Wrong answers for Question 2
    ["<!-- This is a comment -->", "/* This is a comment */", "* This is a comment *"], // Wrong answers for Question 3
    ["Assigns a value to a variable.", "Checks if a variable is defined.", "Performs a logical OR operation."] // Wrong answers for Question 4
  ];

//Timer, binds to start button 
let timeLeft = 40;
let timerInterval;

document.getElementById("start").addEventListener("click", function() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timeLeft = 40;
  updateTimer();

  timerInterval = setInterval(function() {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
});

function updateTimer() {
  document.getElementById("timer").innerText = `${timeLeft}`;}

// Bind wrong answers to a vairable that - from timer

// Make score vairable 

// Bind score to local memory

// Make a varible that houses the questions

// bind varible to another that appends a new question and its answers on a click

// Make a enter intials vairble that allows a local memery storing of score+name

// On timer = 0 pull up enter intials and "Lose" vairable

// On score <= question count pull up enter initials

// Make vairable that displays when on the "High Score" page 

