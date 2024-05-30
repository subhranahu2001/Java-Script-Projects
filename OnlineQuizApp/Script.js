

const questions = [
    {
        question:"What is the largest animal in the world?",
        answer:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the largest desert in the world?",
        answer:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Arctic",correct:false},
        ]
    },
    {
        question:"Which is the largest continent in the world?",
        answer:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
            {text:"Arctic",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

console.log(questionElement);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct==="true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

function handleNextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();




