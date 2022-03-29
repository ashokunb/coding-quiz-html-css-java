var buttonE1 = document.querySelector("#start-quiz");
var sPage = document.querySelector(".start-page");
var questionContainerE1 = document.querySelector("#question-cont")
const question = document.querySelector("question")

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];


function startQuiz() {
   
    console.log("stared")
    buttonE1.classList.add("hide")
    sPage.classList.add("hide")
    questionContainerE1.classList.remove("hide")

    var counter = 100
    var countdown = function() {
     console.log(counter);
        counter--;
        if(counter ===0){
            console.log('Quiz is Over!');
            clearInterval(startcountdown)
        };
    };

    var startcountdown = setInterval(countdown, 1000);

}

let questions = [
    {
        question: "question 1",
        answer: "answer 2",
        answer: "answer 3",
        answer: "answer 4",
        answer: "answer 5",
    }
]




/*holds function for when the button gets clicked*/
buttonE1.addEventListener("click", startQuiz);