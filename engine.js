const block = document.querySelector('.block')
const heading = document.querySelector('h2')
const answers = document.querySelector('.answer-block')
const container = document.querySelector('.container')
const unit = document.querySelectorAll('.unit')
const imgCont = document.querySelector('.img-container')
const arrow = '<i class="fas fa-arrow-right"></i>'
const score = document.querySelector('.user-score')



class Generator {
    constructor(question, answers, correct) {
        this.question = question
        this.answers = answers
        this.correct = correct
       // this.name = name
    }
}


const first = new Generator('What will be logged in console?', ['1', '5', 'undefined', '"a" value is not assigned'], `${arrow} undefined`)
const second = new Generator('What browser will display in "alert" window?', ['3', '2', 'null', 'throws error in console'], `${arrow} 2`) 
const third = new Generator('What function will return in the end?', ['1', '2', '3'], `${arrow} 2`)
const forth = new Generator('What will be logged in console?', ['1', '2', 'undefined'], `${arrow} 2`) 
const fifth = new Generator('What will be logged to console?', ['0 1 2 3 4 5 6 7 8 9', '10 times 10', '1 2 3 4 5 6 7 8 9 10'], `${arrow} 0 1 2 3 4 5 6 7 8 9`)
const final = ''

const answerList = [first, second, third, forth, fifth];

let userScore = 0,
    system = 0;

answers.addEventListener('click', (event) => {
      let { target } = event
  
      //if user accidentaly clicks inner element of answer
      if(target.tagName !== 'DIV') {
        target = target.parentElement;
      }

      if(target.innerHTML == answerList[system].correct ) {
          target.classList.add('correct')
            setTimeout( () => {
             ++userScore
              ++system
            }, 1000)  
          
      }else if(target.innerHTML !== answerList[system].correct ) {
        target.classList.add('wrong')
        setTimeout( () => {
            ++system
          }, 1000)  
      }

       setTimeout(setDefault, 2000)
       setTimeout(changeQuestion, 2000)
})


function changeQuestion() {
  score.innerHTML = `Your current score is ${userScore}`;

  if(system < 5) {
    //set Question
    heading.innerHTML = answerList[system].question
    //display Answers
    for(let i = 0; i < 3; i++) {
    unit[i].innerHTML = `${arrow} ${answerList[system].answers[i]}`
    }
    //display picture
    imgCont.innerHTML = `<img src='img/question-${system}.jpg'>`
  } else {
    imgCont.style.display = 'none'
    answers.style.display = 'none'
    heading.innerHTML = 'Test is over!'
    let message;
    if(userScore < 2) {
      message = 'your knowledge is weak, practice more!'
    } else if(userScore < 4) {
      message = 'you have good results, but still you should practice more!'
    } else if(userScore <= 5) {
      message = 'congrats, you have good knowledge of JavaScript!'
    }
    score.innerHTML = `You answered correctly ${userScore} out of 5 questions, ${message}`;


  }

}    
changeQuestion()

function setDefault() {
    for(let i = 0; i < 3; i++) {
        unit[i].className = 'unit'
        }
} 


