var currentQuestion = 1;

// Randomize the question number based on which questions types are chosen
function randomizeQuestion() {
    currentQuestion = Math.floor((Math.random() * 5) + 1);
    console.log(currentQuestion);
}

// Goes to the next question in the list
function nextQuestion() {
    if (currentQuestion < 5) {
        currentQuestion++;
    } else {
        currentQuestion = 1;
    }
    console.log(currentQuestion);
}

// Goes to the next question in the list
function prevQuestion() {  
    if (currentQuestion > 1) {
        currentQuestion--;
    } else {
        currentQuestion = 5;
    }

    console.log(currentQuestion);
}

// Shows the answer to the question
function showAnswer() {


}











// class Questions {
//     question: ;
//     answer: ;
// }