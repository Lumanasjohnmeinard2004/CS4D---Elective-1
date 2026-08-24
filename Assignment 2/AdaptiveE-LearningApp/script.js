/* =========================================
   QUESTION BANK
========================================= */

const questionBank = [

    {
        question: "What is the capital city of Japan?",

        answers: [
            "Seoul",
            "Tokyo",
            "Beijing",
            "Bangkok"
        ],

        correct: "Tokyo"
    },


    {
        question: "Which planet is known as the Red Planet?",

        answers: [
            "Venus",
            "Jupiter",
            "Mars",
            "Mercury"
        ],

        correct: "Mars"
    },


    {
        question: "What is 12 × 8?",

        answers: [
            "86",
            "96",
            "108",
            "112"
        ],

        correct: "96"
    },


    {
        question: "Which language is primarily used to structure web pages?",

        answers: [
            "HTML",
            "Python",
            "SQL",
            "Java"
        ],

        correct: "HTML"
    },


    {
        question: "How many continents are there?",

        answers: [
            "5",
            "6",
            "7",
            "8"
        ],

        correct: "7"
    },


    {
        question: "Which gas do humans need to breathe to survive?",

        answers: [
            "Carbon dioxide",
            "Oxygen",
            "Hydrogen",
            "Helium"
        ],

        correct: "Oxygen"
    },


    {
        question: "What does CPU stand for?",

        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],

        correct: "Central Processing Unit"
    },


    {
        question: "Which ocean is the largest?",

        answers: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],

        correct: "Pacific Ocean"
    },


    {
        question: "What is 100 divided by 4?",

        answers: [
            "20",
            "25",
            "30",
            "40"
        ],

        correct: "25"
    },


    {
        question: "Which file extension is commonly used for JavaScript?",

        answers: [
            ".html",
            ".css",
            ".js",
            ".java"
        ],

        correct: ".js"
    }

];


/* =========================================
   QUIZ SETTINGS
========================================= */

// Number of questions presented in one quiz
const QUESTIONS_PER_QUIZ = 5;


/* =========================================
   QUIZ VARIABLES
========================================= */

let quizQuestions = [];

let currentIndex = 0;

let correctAnswers = 0;

let selectedAnswer = null;


/* =========================================
   GET HTML ELEMENTS
========================================= */

const currentQuestionElement =
    document.getElementById("currentQuestion");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const questionNumberElement =
    document.getElementById("questionNumber");

const questionTextElement =
    document.getElementById("questionText");

const answersElement =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const progressElement =
    document.getElementById("progress");

const quizCard =
    document.querySelector(".quiz-card");

const resultCard =
    document.getElementById("resultCard");

const scorePercentageElement =
    document.getElementById("scorePercentage");

const correctCountElement =
    document.getElementById("correctCount");

const totalCountElement =
    document.getElementById("totalCount");

const resultTitleElement =
    document.getElementById("resultTitle");

const resultIconElement =
    document.getElementById("resultIcon");

const recommendationElement =
    document.getElementById("recommendation");

const restartButton =
    document.getElementById("restartButton");


/* =========================================
   SHUFFLE FUNCTION
========================================= */

function shuffle(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [
            shuffled[i],
            shuffled[randomIndex]
        ] =
        [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    // Randomize the question order
    quizQuestions =
        shuffle(questionBank)
        .slice(0, QUESTIONS_PER_QUIZ);


    currentIndex = 0;

    correctAnswers = 0;

    selectedAnswer = null;


    // Update total question count
    totalQuestionsElement.textContent =
        quizQuestions.length;


    // Display first question
    displayQuestion();
}


/* =========================================
   DISPLAY QUESTION
========================================= */

function displayQuestion() {

    const currentQuestion =
        quizQuestions[currentIndex];


    selectedAnswer = null;


    // Update question counter
    currentQuestionElement.textContent =
        currentIndex + 1;


    questionNumberElement.textContent =
        `Question ${currentIndex + 1}`;


    // Display question
    questionTextElement.textContent =
        currentQuestion.question;


    // Update progress
    const progress =
        ((currentIndex) /
        quizQuestions.length) * 100;

    progressElement.style.width =
        `${progress}%`;


    // Clear old answers
    answersElement.innerHTML = "";


    // Randomize answer choices
    const shuffledAnswers =
        shuffle(currentQuestion.answers);


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    shuffledAnswers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-button";


            button.innerHTML = `

                <span class="answer-letter">
                    ${letters[index]}
                </span>

                ${answer}

            `;


            // Make answer interactive
            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        button,
                        answer
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    // Disable next until answer is selected
    nextButton.disabled = true;


    // Change button text on final question
    if (
        currentIndex ===
        quizQuestions.length - 1
    ) {

        nextButton.textContent =
            "Submit Quiz";

    } else {

        nextButton.textContent =
            "Next Question";

    }

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    selectedButton,
    answer
) {

    // Remove previous selection
    const allButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    allButtons.forEach(
        button => {

            button.classList.remove(
                "selected"
            );

        }
    );


    // Select current answer
    selectedButton.classList.add(
        "selected"
    );


    selectedAnswer = answer;


    // Enable next button
    nextButton.disabled = false;
}


/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener(
    "click",
    function () {

        if (selectedAnswer === null) {
            return;
        }


        // Check whether answer is correct
        const currentQuestion =
            quizQuestions[currentIndex];


        if (
            selectedAnswer ===
            currentQuestion.correct
        ) {

            correctAnswers++;

        }


        // Move to next question
        currentIndex++;


        // If quiz is finished
        if (
            currentIndex >=
            quizQuestions.length
        ) {

            finishQuiz();

            return;
        }


        // Otherwise display next question
        displayQuestion();

    }
);


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    // Calculate percentage
    const percentage =
        (correctAnswers /
        quizQuestions.length) * 100;


    const roundedPercentage =
        Math.round(percentage);


    // Update result statistics
    scorePercentageElement.textContent =
        `${roundedPercentage}%`;


    correctCountElement.textContent =
        correctAnswers;


    totalCountElement.textContent =
        quizQuestions.length;


    // -----------------------------------------
    // ADAPTIVE RULE 1
    // -----------------------------------------
    //
    // IF score < 70%
    // THEN recommend review
    //

    if (percentage < 70) {

        resultTitleElement.textContent =
            "More Practice Recommended";

        resultIconElement.textContent =
            "📖";


        recommendationElement.className =
            "recommendation review";


        recommendationElement.innerHTML = `

            <h3>
                Review the Learning Material
            </h3>

            <p>
                Your score was
                <strong>${roundedPercentage}%</strong>.
                The system recommends reviewing
                the key concepts and practicing
                before moving to more advanced
                material.
            </p>

        `;

    }


    // -----------------------------------------
    // ADAPTIVE RULE 2
    // -----------------------------------------
    //
    // IF score >= 85%
    // THEN recommend challenge
    //

    else if (percentage >= 85) {

        resultTitleElement.textContent =
            "You're Ready for a Challenge!";

        resultIconElement.textContent =
            "🚀";


        recommendationElement.className =
            "recommendation challenge";


        recommendationElement.innerHTML = `

            <h3>
                Move to a More Difficult Lesson
            </h3>

            <p>
                Excellent work! You scored
                <strong>${roundedPercentage}%</strong>.
                Based on your performance,
                the system recommends a more
                challenging learning activity.
            </p>

        `;

    }


    // -----------------------------------------
    // STANDARD RESULT
    // -----------------------------------------
    //
    // IF score is 70% - 84%
    // THEN continue normally
    //

    else {

        resultTitleElement.textContent =
            "Keep Learning";

        resultIconElement.textContent =
            "📚";


        recommendationElement.className =
            "recommendation standard";


        recommendationElement.innerHTML = `

            <h3>
                Continue at the Current Level
            </h3>

            <p>
                You scored
                <strong>${roundedPercentage}%</strong>.
                Your performance is within the
                standard range, so continue with
                the next lesson at the current
                difficulty.
            </p>

        `;

    }


    // Show results
    quizCard.classList.add(
        "hidden"
    );


    resultCard.classList.remove(
        "hidden"
    );


    // Scroll to results
    resultCard.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================================
   RESTART QUIZ
========================================= */

restartButton.addEventListener(
    "click",
    function () {

        resultCard.classList.add(
            "hidden"
        );


        quizCard.classList.remove(
            "hidden"
        );


        startQuiz();


        quizCard.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   START APPLICATION
========================================= */

startQuiz();