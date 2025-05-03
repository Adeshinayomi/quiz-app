import { scores,answers,results } from "../data/resultdata.js";
import { loadQuestionNumber } from "../data/questions.js";
function displayResult() {
  let index=0
  let userScore = 0
  let totalQuestions = 0
  scores.forEach((score)=>{
    userScore=score.score
    totalQuestions=score.total
  })
  let url=new URL(window.location.href)
  let name=url.searchParams.get('name')


    document.querySelector('.result-header').innerHTML = `
      <h1>${name}</h1>
        <span>You scored</span>
        <span>${userScore}/${totalQuestions}</span>
    `
    loadQuestionNumber(totalQuestions,document.querySelector('.js-number-cont'));
    function loadResults(){
    let question=results[index]
    document.querySelector('.js-questions-cont').innerHTML=question
      document.querySelector('.js-submit-btn').innerHTML=`home`
    let your_answer=answers[index].your_answer
    let correct_answer=answers[index].correct_answer

    document.querySelector('.js-answers').innerHTML=`
      <p>Your Answer:${your_answer}</p>
    <p>correct Answer:${correct_answer}</p>
   `

   document.querySelectorAll('.js-question-number').forEach((number)=>{
    number.addEventListener('click',()=>{
      const numberValue=number.innerHTML
      index=numberValue-1
      loadResults()
    })
  })
  document.querySelector('.prev-btn').addEventListener('click', () => {
    if (index > 0) {
      index--;
      loadResults();
    }
  });
  document.querySelector('.next-btn').addEventListener('click', () => {
    if (index < totalQuestions) {
      index++;
      loadResults()
    }
  });
  }
  loadResults()



  document.querySelector('.js-submit-btn').addEventListener('click',()=>{
    localStorage.removeItem('answers')
    localStorage.removeItem('scores') 
    localStorage.removeItem('results')
    window.location.href=`./Homepage.html`
  })
  
  
}
displayResult()
