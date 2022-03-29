/*variable to select our button*/
var buttonE1 = document.querySelector("#start-quiz");
var sPage = document.querySelector(".start-page");
var questionContainer = document.querySelector("#question-cont")

/*countown timer
function startQuiz() {
    var counter = 5
    var countdown = function() {
     console.log(counter);
        counter--;
        if(counter ===0){
            console.log('Quiz is Over!');
            clearInterval(startcountdown)
        };
    };

    var startcountdown = setInterval(countdown, 1000);

};
*/

/*
var StartG= function(event){
    event.preventDefault();
    formDiv.style.display = "none";
}
*/
function startQuiz() {
    buttonE1.classList.add("hide");
    sPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    NextQuestion()
}

function NextQuestion () {

}
var questions = [
    question: 
]

function answer () {

}

/*holds function for when the button gets clicked*/
buttonE1.addEventListener("click", startQuiz);