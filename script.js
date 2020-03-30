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
const secondsDisplay = document.getElementById("time");
var totalSeconds = 0;
var secondsElapsed = 0;
var secondsLeft = totalSeconds - secondsElapsed;
let questionIndex;
let index = 0;
let myArray = [];
let score = 0;

const op1 = document.getElementById("0");
const op2 = document.getElementById("1");
const op3 = document.getElementById("2");
const op4 = document.getElementById("3");

//listing questions and options and answers
const questions = [
    {
        qn: 'How do you declare a JavaScript variable?',
        options: ["(a) variable carName;","(b) var carName;","(c) v carName;","(d) var = carName;"],
        answer: 1
    },
    
    {
        qn: 'Which operator is used to assign a value to a variable?',
        options: ["(a) -","(b) x","(c) *","(d) ="],
        answer: 3
    },

    {
        qn: 'Inside which HTML element do we put the JavaScript; <.....>?',
        options: ["(a) javascript","(b) script","(c) scripting","(d) js"],
        answer: 1
    },
    
    {
        qn: 'How do you create a function in JavaScript?',
        options: ["(a) function:myFunction()","(b) function = myFunction()","(c) function myFunction()","(d) function():myfunction"],
        answer: 2
    },

    {
        qn: 'Where is the correct place to insert a JavaScript?',
        options: ["(a) The body section","(b) Both in the head section and the body section are correct place","(c) The head section","(d) None"],
        answer: 1
    },
   
    {
        qn: 'How do you call a function named myFunction?',
        options: ["(a) myFunction()","(b) call myFunction()","(c) call function myFunction()","(d) call:myFunction()"],
        answer: 0
    },

    {
        qn: 'How to write an IF statement in JavaScript?',
        options: ["(a) if i == 5 then","(b) if i = 5","(c) if i = 5 then","(d) if (i == 5)"],
        answer: 3
    },

    {
        qn: 'How to write an IF statement for executing some code if i is NOT equal to 5?',
        options: ["(a) if i =! 5 then","(b) if (i <> 5)","(c) if i != 5","(d) if (i != 5)"],
        answer: 3
    },

    {
        qn: 'How does a WHILE loop start?',
        options: ["(a) while (i <= 10)","(b) while i = 1 to 10","(c) while (i <= 10; i++)","(d) while (i = 0; i <= 10; i++)"],
        answer: 0
    },

    {
        qn: 'How does a FOR loop start?',
        options: ["(a) for (i <= 5; i++)","(b) for (i = 0; i <= 5; i++)","(c) for (i = 0; i <= 5)","(d) for i = 1 to 5"],
        answer: 1
    },

    {
        qn: 'How do you round the number 7.25, to the nearest integer?',
        options: ["(a) Math.rnd(7.25)","(b) round(7.25)","(c) Math.round(7.25)","(d) rnd(7.25)"],
        answer: 2
    },

    {
        qn: 'How do you find the number with the highest value of x and y?',
        options: ["(a) top(x, y)","(b) ceil(x, y)","(c) Math.ceil(x, y)","(d) Math.max(x, y)"],
        answer: 3
    },

    {
        qn: 'How can you detect the clients browser name?',
        options: ["(a) browser.name","(b) client.navName","(c) navigator.appName","(d) client.appName"],
        answer: 2
    },

    {
        qn: 'Which event occurs when the user clicks on an HTML element?',
        options: ["(a) onclick","(b) onmouseover","(c) onchange","(d) onmouseclick"],
        answer: 0
    }
]

startBtn.addEventListener("click", () => {
    startQuiz();
    startTimer();
});

// starts the quiz challange
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

// This function just making sure the numbers look nice for the html elements
function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 180;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft + "s";
    } else {
      formattedSeconds = secondsLeft + "s";
    }
  
    return formattedSeconds;
  }

//  This function just retrieves the values from the html input elements
  function setTime() {
    totalSeconds = 180;
  }

// displays the time and checks to see if time is up
function renderTime() {
    secondsDisplay.textContent = getFormattedSeconds();
  
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }

// function timer
function startTimer() {
    setTime();
    if (totalSeconds > 0) {    
        interval = setInterval(function() {
          secondsElapsed++;
          renderTime();
         }, 1000);
    }
  }

//  This function stops the timer
  function stopTimer() {
    secondsElapsed = 0;
    gameOver();
    clearInterval(interval);
  }

// checking options are correct or not
function check(element) {
    var secondsLeft = (totalSeconds - secondsElapsed) % 180;
    if(element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        score++;
    }
    else {
        element.classList.add("wrong");
        if(secondsLeft >= 10) {
            secondsElapsed += 10;
        }
        else {
            gameOver();
            stopTimer();
        }   
    }
    disableOptions();
}

// if one option is selected by the user, disable other options
function disableOptions() {
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
    
    if(index == questions.length) {
        gameOver();
        stopTimer();
    }
    else {
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
    localStorage.setItem("initial", JSON.stringify(initial.value));
    localStorage.setItem("score",JSON.stringify(score));
    document.querySelector(".saveProgress").classList.add("hide");
    storedHighscore.classList.add("hide");
}

//getting the initials saved in the local storage
function storedScore() {
    document.querySelector(".saveProgress").classList.add("hide");
    storedHighscore.classList.remove("hide");

    document.getElementById("storedData").innerHTML = JSON.parse(localStorage.getItem("initial")) + JSON.parse(localStorage.getItem("score"));

}

// clearing the saved initial from the local storage
function clearHighscore() {
    localStorage.removeItem("initial");
    localStorage.removeItem("score");
    document.getElementById("storedData").innerHTML = "";
}

//going back to the main page of the game
function goBack() {
    window.location.reload();
}