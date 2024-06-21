let currentQuestion = 0;
let correctAnswers = 0;
const quizData = [
  {
    question: "What is JavaScript?",
    options: [
      "A markup language",
      "A programming language",
      "A database technology",
      "A web framework"
    ],
    answer: 1
  },
  {
    question: "Which built-in method returns the string representation of the number's value?",
    options: [
      "toValue()",
      "toNumber()",
      "toString()",
      "valueOf()"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a valid JavaScript variable name?",
    options: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "*",
      "=",
      "==",
      ":="
    ],
    answer: 1
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      "<js>",
      "<scripting>",
      "<javascript>",
      "<script>"
    ],
    answer: 3
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')",
      "alert('Hello World')"
    ],
    answer: 3
  }
];

// Function to start quiz
function startQuiz() {
  loadQuestion();
}

// Function to load question and options
function loadQuestion() {
  const questionText = document.getElementById('questionText');
  const option0 = document.getElementById('option0');
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');

  // Reset radio button selection
  document.getElementById('quizForm').reset();

  if (currentQuestion < quizData.length) {
    questionText.textContent = quizData[currentQuestion].question;
    option0.textContent = quizData[currentQuestion].options[0];
    option1.textContent = quizData[currentQuestion].options[1];
    option2.textContent = quizData[currentQuestion].options[2];
    option3.textContent = quizData[currentQuestion].options[3];

    // disableNextButton(); // Initially disable Next button
  } else {
    showResult();
  }
}

// Function to handle next button click
function nextQuestion() {
  const quizForm = document.getElementById('quizForm');
  const selectedAnswer = getSelectedAnswer();

  if (selectedAnswer !== undefined) {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      correctAnswers++;
    }
    currentQuestion++;
    loadQuestion();
  } else {
    alert('Please select an answer before proceeding.');
  }
}

// Function to get selected answer value
function getSelectedAnswer() {
  const answers = document.getElementsByName('answer');
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return parseInt(answers[i].value);
    }
  }
  return undefined;
}

// Function to show result
function showResult() {
  const quizContainer = document.getElementById('quizContainer');
  const resultContainer = document.getElementById('resultContainer');
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';

  const correctAnswersText = document.getElementById('correctAnswers');
  correctAnswersText.textContent = `You scored ${correctAnswers} out of ${quizData.length} correct.`;
}

// Function to restart quiz
function restartQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById('quizContainer').style.display = 'block';
  document.getElementById('resultContainer').style.display = 'none';
  startQuiz();
}
startQuiz();
