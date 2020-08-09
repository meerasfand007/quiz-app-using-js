var questions = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

},
]
const answersOfTheQuestion=['Brendan Eich',"Steve Jobs",'Larry Page','Lee Byung-chul']


// vars
window.onload= function(){
    showQuestion(0)
}
var answer=[]
var finalAnswer=[]
var next=0
var toggle=false
var score=0
const username=document.getElementById("username")
var question=document.getElementById('question')
var answers=document.getElementById('answers')
if (next <= questions.length){
    function nextQuestion(){
        toggle=false
        next++
        var val=answer.splice(-1)
        finalAnswer.push(val[0])
        console.log(finalAnswer)
        showQuestion(next)
        console.log('check')

        
    }

    function showQuestion(questionNumber){
        if(next===questions.length-1){
            document.getElementsByClassName('btn-success')[0].innerHTML='submit'
            document.getElementsByClassName('btn-success')[0].classList.add('btn-warning')
            
        }
        if (next===questions.length){
            answersOfTheQuestion[0]===finalAnswer[0] ? score ++ : score
            answersOfTheQuestion[1]===finalAnswer[1] ? score ++ : score
            answersOfTheQuestion[2]===finalAnswer[2] ? score ++ : score
            answersOfTheQuestion[3]===finalAnswer[3] ? score ++ : score
            console.log(score)
            document.getElementsByClassName('model-body')[0].innerHTML=`${username.value.toUpperCase()} your total score of the quiz is ${score}`
            document.getElementsByClassName('model')[0].classList.add("model-show")
            document.getElementsByClassName('main-container')[0].style.filter='blur(50px)'
            var cross=document.getElementsByClassName('model')[0].childNodes[1].childNodes[3]
            cross.setAttribute('onclick','cancel()')
            console.log(document.getElementsByClassName('model')[0].childNodes[1].childNodes[3])

        }
        answers.innerHTML=`
            <h3 class="h3" >${questions[questionNumber].question}</h3>
            <ul id="answers">
                <li class="options" onclick='answerTOBE(this)'>${questions[questionNumber].options[0]}</li>
                <li class="options" onclick='answerTOBE(this)'>${questions[questionNumber].options[1]}</li>
                <li class="options" onclick='answerTOBE(this)'>${questions[questionNumber].options[2]}</li>
                <li class="options" onclick='answerTOBE(this)'>${questions[questionNumber].options[3]}</li>
            </ul>
            `
        
    }
}

function answerTOBE(ans){
    answer.push(ans.innerHTML)
    toggle=!toggle
    if(toggle){
        ans.classList.add('active')
    }else{
        ans.classList.remove('active')
    }
}

function getUsername(){
    if (username.value !== null || username.value > 0){
        document.getElementById('name').innerHTML=username.value
        document.getElementsByClassName('main-container')[0].classList.remove('model')
        document.getElementsByClassName('container')[0].classList.add('model1')
        console.log(document.getElementsByClassName('container')[0])
    } 
}