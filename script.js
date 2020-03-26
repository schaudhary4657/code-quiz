const highScores = document.querySelector(".highScores");
const time = document.querySelector(".time");
const startBtn = document.querySelector("#button");


startBtn.addEventListener("click", quizQn);

function quizQn() {
    var questions = [
        {
            prompt: "Inside which HTML element do we put the JavaScript? \n(a) <javascript>\n(b) <script>\n(c) <scripting>\n(d) <js>",
            answer: "b"
        },
        {
            prompt: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p> \n(a) document.getElementById("demo").innerHTML = "Hello World!";\n(b) #demo.innerHTML = "Hello World!";\n(c) document.getElementByName("p").innerHTML = "Hello World!";\n(d) document.getElement("p").innerHTML = "Hello World!";",
            answer: "a"
        },
        {
            prompt: "Where is the correct place to insert a JavaScript? \n(a) The <body> section\n(b) Both the <head> section and the <body> section are correct\n(c) The <head> section\n(d) None",
            answer: "b"
        },
        {
            prompt: "What is the correct syntax for referring to an external script called "xxx.js"? \n(a) <script href="xxx.js">\n(b) <script name="xxx.js">\n(c) <script src="xxx.js">\n(d) <script="xxx.js">",
            answer: "c"
        },
        {
            prompt: "How do you write "Hello World" in an alert box? \n(a) msgBox("Hello World");\n(b) msg("Hello World");\n(c) alertBox("Hello World");\n(d) alert("Hello World");",
            answer: "d"
        },
        {
            prompt: "How do you create a function in JavaScript? \n(a) function:myFunction()\n(b) function = myFunction()\n(c) function myFunction()\n(d) function():myfunction",
            answer: "c"
        },
        {
            prompt: "How do you call a function named "myFunction"? \n(a) myFunction()\n(b) call myFunction()\n(c) call function myFunction()\n(d) call:myFunction()",
            answer: "a"
        },
        {
            prompt: "How to write an IF statement in JavaScript? \n(a) if i == 5 then\n(b) if i = 5\n(c) if i = 5 then\n(d) if (i == 5)",
            answer: "d"
        },
        {
            prompt: "How to write an IF statement for executing some code if "i" is NOT equal to 5? \n(a) if i =! 5 then\n(b) if (i <> 5)\n(c) if i <> 5\n(d) if (i != 5)",
            answer: "d"
        },
        {
            prompt: "How does a WHILE loop start? \n(a) while (i <= 10)\n(b) while i = 1 to 10\n(c) while (i <= 10; i++)\n(d) while (i = 0; i <= 10; i++)",
            answer: "a"
        },
        {
            prompt: "How does a FOR loop start? \n(a) for (i <= 5; i++)\n(b) for (i = 0; i <= 5; i++)\n(c) for (i = 0; i <= 5)\n(d) for i = 1 to 5",
            answer: "b"
        },
        {
            prompt: "How can you add a comment in a JavaScript? \n(a) 'This is a comment\n(b) <!--This is a comment-->\n(c) //This is a comment\n(d) :This is a comment",
            answer: "c"
        },
        {
            prompt: "How to insert a comment that has more than one line? \n(a) //This comment has more than one line//\n(b) /*This comment has more than one line*/\n(c) <!--This comment has more than one line-->\n(d) 'This comment has more than one line'",
            answer: "b"
        },
        {
            prompt: "What is the correct way to write a JavaScript array? \n(a) var colors = ["red", "green", "blue"]\n(b) var colors = "red", "green", "blue"\n(c) var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")\n(d) var colors = (1:"red", 2:"green", 3:"blue")",
            answer: "a"
        },
        {
            prompt: "How do you round the number 7.25, to the nearest integer? \n(a) Math.rnd(7.25)\n(b) round(7.25)\n(c) Math.round(7.25)\n(d) rnd(7.25)",
            answer: "c"
        },
        {
            prompt: "How do you find the number with the highest value of x and y? \n(a) top(x, y)\n(b) ceil(x, y)\n(c) Math.ceil(x, y)\n(d) Math.max(x, y)",
            answer: "d"
        },
        {
            prompt: "How can you detect the client's browser name? \n(a) browser.name\n(b) client.navName\n(c) navigator.appName\n(d) client.appName",
            answer: "c"
        },
        {
            prompt: "Which event occurs when the user clicks on an HTML element? \n(a) onclick\n(b) onmouseover\n(c) onchange\n(d) onmouseclick",
            answer: "a"
        },
        {
            prompt: "How do you declare a JavaScript variable? \n(a) variable carName;\n(b) var carName;\n(c) v carName;\n(d) var = carName;",
            answer: "b"
        },
        {
            prompt: "Which operator is used to assign a value to a variable? \n(a) -\n(b) x\n(c) *\n(d) =",
            answer: "d"
        }
    ]
    var score = 0;

    for(var i = 0; i < questions.length; i++) {
        var answer = window.prompt(questions[i].prompt);
        if(answer == questions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    }
}