const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const options = document.getElementById("options").children;
const questionContainerEl = document.getElementById("question-container");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswer = document.querySelector(".correct-answers");
const question = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const initial = document.getElementById("initial");
const content = document.getElementById("content");
const container = document.getElementById("container");
const time = document.getElementById("time");
let questionIndex;
let index = 0;
let myArray = [];
let score = 0;

const op1 = document.getElementById("0");
const op2 = document.getElementById("1");
const op3 = document.getElementById("2");
const op4 = document.getElementById("3");

// listing questions and options and answers
const questions = [
    {
        qn: "How do you declare a JavaScript variable?",
        options: ["(a) variable carName;","(b) var carName;","(c) v carName;","(d) var = carName;"],
        answer: 1
    },
    
    {
        qn: "Which operator is used to assign a value to a variable?",
        options: ["(a) -","(b) x","(c) *","(d) ="],
        answer: 3
    }

    // {
    //     qn: "Inside which HTML element do we put the JavaScript; <.....>?",
    //     options: ["(a) javascript","(b) script","(c) scripting","(d) js"],
    //     answer: 1
    // },
    
    // {
    //     qn: "Where is the correct place to insert a JavaScript?",
    //     options: ["(a) The <body> section","(b) Both the <head> section and the <body> section are correct","(c) The <head> section","(d) None"],
    //     answer: 1
    // }
]

startBtn.addEventListener("click", () => {
    startQuiz();
    startTimer();
});

function startQuiz() {
    startBtn.classList.add("hide");
    content.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    loadQuestion(randomQuestion());
};

// setting questions and options and answers
totalQuestionSpan.innerHTML = questions.length;
function loadQuestion() {
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].qn;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
}

// funtion timer
function startTimer() {
    let time = 200;
    time --;
}

// checking options are correct or not
function check(element) {
    if(element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
        time -10;
    }
    disabledOptions();
}

// if one option is selected by the user, disable other options
function disabledOptions() {
    for(let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
        // if the user selects the wrong answer, displays the correct answer
        if(options[i].id == questions[questionIndex].answer) {
            options[i].classList.add("correct");
        }
    }
}

// enabling the options to go to next question
function enableOptions() {
    for(let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

// user should slect one option for each question before going to the next question
function selectOption() {
    if(!options[0].classList.contains("disabled")) {
        alert("Please select atleast one option!");
    } else {
        enableOptions();
        randomQuestion();
    }
}

// setting next question
nextBtn.addEventListener("click", () => {
    questionIndex++;
    selectOption();
    loadQuestion();
});

// getting random questions
// also removing the duplicacy of the question
function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let duplicate = 0;
    
    if(index == questions.length || time == 0) {
        gameOver();
    } else {
        if(myArray.length > 0) {
            for(let i = 0; i < myArray.length; i++) {
                if(myArray[i] == randomNumber) {
                    duplicate = 1;
                    break;
                }
            }
            if(duplicate == 1) {
                randomQuestion();
            } else {
                questionIndex = randomNumber;
            }
        }
        if(myArray.length == 0) {
            questionIndex = randomNumber;
        }
        myArray.push(randomNumber);
    }
}

// displaying the score
function gameOver() {
    questionContainerEl.classList.add("hide");
    document.querySelector(".saveProgress").classList.remove("hide");
    document.querySelector(".storedHighscore").classList.add("hide");
    correctAnswer.innerHTML = "Your final score is: " + score;
};

// saving the intials in the local storage
function saveInitial() {
    localStorage.setItem("initial", JSON.stringify(initial));
    // console.log(JSON.parse(localStorage['initial']));
    document.querySelector(".saveProgress").classList.add("hide");
    storedHighscore.classList.add("hide");
}

//getting the initials saved in the local storage
function storedScore() {
    document.querySelector(".saveProgress").classList.add("hide");
    storedHighscore.classList.remove("hide");

    document.getElementById("storedInitial").innerHTML = JSON.parse(localStorage.getItem("initial"));
    // console.log(JSON.parse(localStorage['initial']));
}

// clearing the saved initial from the local storage
function clearHighscore() {
    localStorage.removeItem("initial");
}

//going back to the main page of the game
function goBack() {
    window.location.reload();
}