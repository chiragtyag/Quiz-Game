const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Ernest Hemingway"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = questionData.options[index];
    });
}

function selectOption(selectedOptionIndex) {
    const questionData = quizData[currentQuestionIndex];
    if (selectedOptionIndex === questionData.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').textContent = `Your score is ${score} out of ${quizData.length}`;
    document.getElementById('score-container').style.display = 'block';
}

window.onload = startQuiz;
