// import questions for each categoey
import { animalsQuestions } from './animalsQuestions.js';
import { habitatsQuestions } from './habitatsQuestions.js';
import { oceanQuestions } from './oceanQuestions.js';
import { spaceQuestions } from './spaceQuestions.js';

// Variables to track game state
let currentQuestionIndex = 0;
let currentLives = 5;
let questions = [];

// Function to shuffle answers and randomize question selection
function shuffleAnswersAndQuestions() {
    // Shuffle questions
    questions = [
        ...shuffleArray(animalsQuestions).slice(0, 5),
        ...shuffleArray(habitatsQuestions).slice(0, 5),
        ...shuffleArray(oceanQuestions).slice(0, 5),
        ...shuffleArray(spaceQuestions).slice(0, 5),
    ];
}

// Helper function to shuffle arrays
function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Start the quiz by calling the first question
function startGame() {
    // Hide the start button
    document.getElementById('about').style.display = 'none';

    // Show the quiz container
    document.getElementById('quiz-container').style.display = 'flex';

    // Hide the restart button initially
    document.getElementById('restart-btn').style.display = 'none';

    shuffleAnswersAndQuestions();
    showQuestion();
}

// Display the current question and answers and question no and level
function showQuestion() {
    const level = document.getElementById('level');
    const main = document.getElementById('main');

    if (currentQuestionIndex >= questions.length || currentLives <= 0) {
        endGame();
        return;
    }

    if (0 <= currentQuestionIndex && currentQuestionIndex <5) {
        level.innerText = "Subject: Animals";
        main.classList.remove("earth");
        main.classList.add("animals");
    } else if (5 <= currentQuestionIndex && currentQuestionIndex <10) {
        level.innerText = "Subject: Habitats";
        main.classList.remove("animals");
        main.classList.add("habitat");
    } else if (10 <= currentQuestionIndex && currentQuestionIndex <15) {
        level.innerText = "Subject: The Ocean";
        main.classList.remove("habitat");
        main.classList.add("ocean");
    } else {
        level.innerText = "Subject: Space";
        main.classList.remove("ocean");
        main.classList.add("planets");
    }

    document.getElementById('current-question').innerText = `Question: ${currentQuestionIndex + 1}/20`;

    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    
    // Randomize answers to be displayed on the buttons
    const answers = shuffleArray(question.answers);

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, idx) => {
        btn.innerText = answers[idx];
        btn.style.backgroundColor = '#FD7A03'; // Reset button color
        btn.onclick = () => handleAnswerClick(answers[idx], question.correct);
    });
}

// Handle an answer click event
function handleAnswerClick(answer, correctAnswer) {
    const answerButtons = document.querySelectorAll('.answer-btn');
    const resultContainer = document.getElementById('result-container');
    const livesContainer = document.getElementById('lives');

    // Check if the answer is correct
    if (answer === correctAnswer) {
        resultContainer.innerText = "Correct!";
        resultContainer.style.backgroundColor = '#BBDD30';
        resultContainer.style.padding = '0.25rem';
        answerButtons.forEach(btn => {
            if (btn.innerText === answer) btn.style.backgroundColor = '#BBDD30';
        });
    } else {
        resultContainer.innerText = "Incorrect!";
        resultContainer.style.backgroundColor = '#E14536';
        resultContainer.style.padding = '0.25rem';
        currentLives--;
        livesContainer.innerText = `Lives: ${currentLives}`;
        answerButtons.forEach(btn => {
            if (btn.innerText === answer) btn.style.backgroundColor = '#E14536';
        });
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
        resultContainer.innerText = "";
        resultContainer.style.padding = '0';

    }, 1000);
}

// End the game and display a message
function endGame() {
    const quizContainer = document.getElementById('quiz-container');
    const winnerMessage = document.getElementById('winner-message');
    const looserMessage = document.getElementById('looser-message');
    const restartBtn = document.getElementById('restart-btn');

    if (currentLives > 0) {
        quizContainer.style.display = "none";
        winnerMessage.style.display = "inline-block";
    } else {
        quizContainer.style.display = "none";
        looserMessage.style.display = "inline-block";
    }

    // Show the restart button
    restartBtn.style.display = 'inline-block';
}

// Reset the game state and start a new quiz
function restartGame() {
    currentLives = 5;
    currentQuestionIndex = 0;
    shuffleAnswersAndQuestions();
    
    // Hide the result and restart button, then start the game again
    document.getElementById('result-container').innerText = '';
    document.getElementById('lives').innerText = `Lives: ${currentLives}`;
    document.getElementById('looser-message').style.display = 'none';
    document.getElementById('winner-message').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';

    // Show the quiz container
    document.getElementById('quiz-container').style.display = 'block';

    showQuestion();
}

// Add event listener to the start quiz button
document.getElementById('start-btn').addEventListener('click', startGame);

// Add event listener to the restart quiz button
document.getElementById('restart-btn').addEventListener('click', restartGame);