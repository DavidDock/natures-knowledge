// Question sets for each subject (updated with 10 more questions each)
const animalsQuestions = [
    { question: "What is the fastest land animal?", answers: ["Cheetah", "Lion", "Elephant", "Horse"], correct: "Cheetah" },
    { question: "What animal is known for having a trunk?", answers: ["Giraffe", "Elephant", "Rhino", "Tiger"], correct: "Elephant" },
    { question: "Which animal is the largest mammal?", answers: ["Blue Whale", "Elephant", "Giraffe", "Shark"], correct: "Blue Whale" },
    { question: "What animal can live both in water and on land?", answers: ["Penguin", "Frog", "Kangaroo", "Eagle"], correct: "Frog" },
    { question: "Which bird is known for its colorful feathers and ability to mimic sounds?", answers: ["Parrot", "Eagle", "Penguin", "Owl"], correct: "Parrot" },
    { question: "Which animal has the longest lifespan?", answers: ["Tortoise", "Whale", "Elephant", "Human"], correct: "Tortoise" },
    { question: "Which animal is known to change color to blend in with its surroundings?", answers: ["Chameleon", "Rabbit", "Eagle", "Penguin"], correct: "Chameleon" },
    { question: "Which animal is the largest living reptile?", answers: ["Crocodile", "Komodo Dragon", "Snake", "Tortoise"], correct: "Crocodile" },
    { question: "Which animal has the longest neck?", answers: ["Giraffe", "Camel", "Zebra", "Elephant"], correct: "Giraffe" },
    { question: "Which mammal is known for being the only flying mammal?", answers: ["Bat", "Squirrel", "Owl", "Raven"], correct: "Bat" },
    // Additional animal questions
    { question: "Which of these is a marine mammal?", answers: ["Whale", "Shark", "Fish", "Crab"], correct: "Whale" },
    { question: "Which animal has the strongest bite force?", answers: ["Crocodile", "Jaguar", "Lion", "Wolf"], correct: "Crocodile" },
    { question: "Which animal is known for its ability to regenerate limbs?", answers: ["Axolotl", "Frog", "Starfish", "Lizard"], correct: "Axolotl" },
    { question: "Which of these animals is the largest bird?", answers: ["Ostrich", "Penguin", "Eagle", "Albatross"], correct: "Ostrich" },
    { question: "Which animal is the only mammal capable of true flight?", answers: ["Bat", "Swan", "Penguin", "Pigeon"], correct: "Bat" },
    { question: "Which animal is known for its 'king of the jungle' title?", answers: ["Lion", "Tiger", "Cheetah", "Elephant"], correct: "Lion" },
    { question: "What is the largest species of bear?", answers: ["Polar Bear", "Grizzly Bear", "Panda Bear", "Brown Bear"], correct: "Polar Bear" },
    { question: "Which animal can live in both freshwater and saltwater?", answers: ["Shark", "Salmon", "Dolphin", "Turtle"], correct: "Salmon" },
];

const habitatsQuestions = [
    { question: "Which of the following is a desert animal?", answers: ["Cactus Wren", "Penguin", "Tiger", "Eagle"], correct: "Cactus Wren" },
    { question: "Where do polar bears live?", answers: ["Arctic", "Amazon Rainforest", "Savanna", "Mountains"], correct: "Arctic" },
    { question: "Which animal is known for building dams?", answers: ["Beaver", "Rabbit", "Swan", "Snake"], correct: "Beaver" },
    { question: "Which of these animals is found in the rainforests?", answers: ["Jaguar", "Camel", "Koala", "Polar Bear"], correct: "Jaguar" },
    { question: "What is the primary habitat of a sea turtle?", answers: ["Ocean", "Desert", "Forest", "Savanna"], correct: "Ocean" },
    { question: "Which of these animals lives in a burrow?", answers: ["Rabbit", "Lion", "Tiger", "Penguin"], correct: "Rabbit" },
    { question: "Where do giraffes primarily live?", answers: ["Savanna", "Rainforest", "Desert", "Arctic"], correct: "Savanna" },
    { question: "Which animal is known for living in the trees?", answers: ["Sloth", "Elephant", "Tiger", "Shark"], correct: "Sloth" },
    { question: "Which habitat is known for having the most biodiversity?", answers: ["Rainforest", "Desert", "Ocean", "Savanna"], correct: "Rainforest" },
    { question: "Which of these animals is found in the ocean?", answers: ["Shark", "Koala", "Lion", "Penguin"], correct: "Shark" },
    // Additional habitat questions
    { question: "What type of habitat do camels live in?", answers: ["Desert", "Forest", "Tundra", "Savanna"], correct: "Desert" },
    { question: "Which animal is found in the tundra?", answers: ["Arctic Fox", "Tiger", "Elephant", "Penguin"], correct: "Arctic Fox" },
    { question: "Which animal lives in the savanna?", answers: ["Lion", "Polar Bear", "Penguin", "Shark"], correct: "Lion" },
    { question: "What do you call the environment where an animal lives?", answers: ["Habitat", "Biome", "Climate", "Territory"], correct: "Habitat" },
    { question: "What animal lives in the ocean and has a long nose called a trunk?", answers: ["Dolphin", "Narwhal", "Whale", "Elephant"], correct: "Narwhal" },
    { question: "Where do most amphibians live?", answers: ["Swamps and ponds", "Mountains", "Deserts", "Arctic"], correct: "Swamps and ponds" },
    { question: "Which of these animals is an example of a forest dweller?", answers: ["Squirrel", "Penguin", "Whale", "Shark"], correct: "Squirrel" },
    { question: "What habitat do most koalas live in?", answers: ["Eucalyptus forests", "Savanna", "Desert", "Mountain"], correct: "Eucalyptus forests" },
    { question: "What habitat is home to meerkats?", answers: ["Desert", "Ocean", "Forest", "Mountain"], correct: "Desert" },
];

const oceanQuestions = [
    { question: "Which of the following animals is a mammal?", answers: ["Whale", "Shark", "Squid", "Jellyfish"], correct: "Whale" },
    { question: "What is the largest ocean on Earth?", answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], correct: "Pacific Ocean" },
    { question: "What is the name of the deepest part of the ocean?", answers: ["Mariana Trench", "Great Barrier Reef", "Abyssal Plain", "Mid-Atlantic Ridge"], correct: "Mariana Trench" },
    { question: "What type of animal is a seahorse?", answers: ["Fish", "Mammal", "Reptile", "Amphibian"], correct: "Fish" },
    { question: "Which of these animals is not found in the ocean?", answers: ["Lion", "Whale", "Shark", "Dolphin"], correct: "Lion" },
    { question: "What is the largest species of fish?", answers: ["Whale Shark", "Great White Shark", "Manta Ray", "Blue Whale"], correct: "Whale Shark" },
    { question: "What type of animal is a coral?", answers: ["Invertebrate", "Fish", "Mammal", "Reptile"], correct: "Invertebrate" },
    { question: "What is the primary source of energy for marine food chains?", answers: ["Sunlight", "Wind", "Tides", "Ocean currents"], correct: "Sunlight" },
    { question: "What type of animal is a jellyfish?", answers: ["Invertebrate", "Fish", "Reptile", "Amphibian"], correct: "Invertebrate" },
    { question: "Which of these is the largest marine mammal?", answers: ["Blue Whale", "Orca", "Seal", "Dolphin"], correct: "Blue Whale" },
    // Additional ocean questions
    { question: "What do sea turtles primarily eat?", answers: ["Seaweed", "Fish", "Coral", "Insects"], correct: "Seaweed" },
    { question: "Which ocean is located between Africa and Australia?", answers: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Southern Ocean"], correct: "Indian Ocean" },
    { question: "Which of these animals can migrate across the ocean?", answers: ["Whale", "Shark", "Sea Turtle", "All of the above"], correct: "All of the above" },
    { question: "What is a group of jellyfish called?", answers: ["Smack", "Swarm", "School", "Pod"], correct: "Smack" },
    { question: "Which of these is a common ocean predator?", answers: ["Shark", "Penguin", "Otter", "Dolphin"], correct: "Shark" },
    { question: "What is a characteristic of the Great Barrier Reef?", answers: ["Coral Reef", "Fish Nursery", "Largest Living Structure", "All of the above"], correct: "All of the above" },
    { question: "What is the main threat to ocean ecosystems?", answers: ["Pollution", "Tides", "Earthquakes", "Hurricanes"], correct: "Pollution" },
    { question: "What type of animal is a starfish?", answers: ["Invertebrate", "Fish", "Mammal", "Reptile"], correct: "Invertebrate" },
    { question: "Which ocean has the highest biodiversity?", answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], correct: "Pacific Ocean" },
];

const spaceQuestions = [
    { question: "Which planet is closest to the Sun?", answers: ["Mercury", "Earth", "Mars", "Venus"], correct: "Mercury" },
    { question: "Which planet is known as the Red Planet?", answers: ["Mars", "Earth", "Jupiter", "Saturn"], correct: "Mars" },
    { question: "What is the name of the galaxy we live in?", answers: ["Milky Way", "Andromeda", "Whirlpool", "Black Eye"], correct: "Milky Way" },
    { question: "Which planet is famous for its rings?", answers: ["Saturn", "Jupiter", "Uranus", "Neptune"], correct: "Saturn" },
    { question: "Which celestial body is the largest in our solar system?", answers: ["Jupiter", "Sun", "Saturn", "Earth"], correct: "Sun" },
    { question: "What is the name of Earth's moon?", answers: ["Luna", "Titan", "Io", "Phobos"], correct: "Luna" },
    { question: "Which planet is known as the 'Earth's twin'?", answers: ["Venus", "Mars", "Neptune", "Mercury"], correct: "Venus" },
    { question: "What is the name of the first man-made satellite in space?", answers: ["Sputnik", "Apollo", "Explorer", "Vostok"], correct: "Sputnik" },
    { question: "Which planet has the largest volcano in the solar system?", answers: ["Mars", "Earth", "Venus", "Jupiter"], correct: "Mars" },
    { question: "Which planet is known for its Great Red Spot?", answers: ["Jupiter", "Saturn", "Neptune", "Venus"], correct: "Jupiter" },
    // Additional space questions
    { question: "What is the name of the first human to walk on the Moon?", answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], correct: "Neil Armstrong" },
    { question: "Which planet is the farthest from the Sun?", answers: ["Neptune", "Pluto", "Saturn", "Uranus"], correct: "Neptune" },
    { question: "What is the name of the force that keeps planets in orbit?", answers: ["Gravity", "Magnetism", "Inertia", "Centripetal force"], correct: "Gravity" },
    { question: "What is the largest planet in our solar system?", answers: ["Jupiter", "Saturn", "Earth", "Mars"], correct: "Jupiter" },
    { question: "Which planet has the most moons?", answers: ["Jupiter", "Saturn", "Mars", "Earth"], correct: "Saturn" },
    { question: "Which spacecraft explored Pluto?", answers: ["New Horizons", "Voyager 1", "Hubble", "Mars Rover"], correct: "New Horizons" },
    { question: "What is the largest star in the Milky Way?", answers: ["UY Scuti", "Sirius", "Sun", "Betelgeuse"], correct: "UY Scuti" },
    { question: "What is the name of the first artificial satellite of the Earth?", answers: ["Sputnik", "Apollo 11", "Voyager", "Hubble"], correct: "Sputnik" },
    { question: "What is the main ingredient of stars?", answers: ["Hydrogen", "Oxygen", "Carbon", "Helium"], correct: "Hydrogen" },
];

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
    document.getElementById('start-btn').style.display = 'none';

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
        level.innerText = "Level: 1";
        main.classList.remove("habitat");
        main.classList.add("animals");
    } else if (5 <= currentQuestionIndex && currentQuestionIndex <10) {
        level.innerText = "Level: 2";
        main.classList.remove("animals");
        main.classList.add("habitat");
    } else if (10 <= currentQuestionIndex && currentQuestionIndex <15) {
        level.innerText = "Level: 3";
        main.classList.remove("habitat");
        main.classList.add("ocean");
    } else {
        level.innerText = "Level: Final";
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
        btn.style.backgroundColor = '#4CAF50';  // Reset button color
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
        resultContainer.style.color = 'green';
        answerButtons.forEach(btn => {
            if (btn.innerText === answer) btn.style.backgroundColor = 'green';
        });
    } else {
        resultContainer.innerText = "Incorrect!";
        resultContainer.style.color = 'red';
        currentLives--;
        livesContainer.innerText = `Lives: ${currentLives}`;
        answerButtons.forEach(btn => {
            if (btn.innerText === answer) btn.style.backgroundColor = 'red';
        });
    }

    // Move to the next question after a brief delay
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
        resultContainer.innerText = "";
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