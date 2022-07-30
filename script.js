const quizDB = [
    {
        question: "Q1: what is the full for of HTML?",
        a:"hellow to my land",
        b:"hey markup language ",
        c:"hyper text markup language",
        d:"hypertext markup language",
        ans: "ans4"
    },
    {
        question: "Q1: what is full form of css ?",
        a:"casssheet style",
        b:"cassading sheets stylee ",
        c:"cartoon sheet style",
        d:"hypertext markup language",
        ans: "ans2"
    },
    {
        question: "Q1:waht is full form of http?",
        a:"heyper tool protocol",
        b:"hey markup language ",
        c:"hypertxt transfer protocol",
        d:"hyfen trnsfer protocol",
        ans: "ans3"
    },

    {
        question: "Q1: what is fullL form of js?",
        a:"jquer",
        b:"hey markup language ",
        c:"cascading sheet style",
        d:"java scipt",
        ans: "ans4"
    },
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answers');
const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount]
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
      }
 });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked =false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>Your scored ${score}/${quizDB.length}</h3>
        <button class="btn " onclick="location.reload()"></button>
        `;
        showScore.classList.remove('scoreArea');
    }
});

