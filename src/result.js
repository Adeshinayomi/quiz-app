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

  let question=results[0]

  document.querySelector('.js-questions-cont').innerHTML=question
  
}
displayResult()
