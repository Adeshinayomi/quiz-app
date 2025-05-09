import { recentQuiz } from "../data/profiledata.js"

let username=localStorage.getItem('username')
document.querySelector('.js-user-name').innerHTML=username

document.querySelector(".js-back-button").addEventListener("click",()=>{
  window.history.back()
})

let html=''
recentQuiz.forEach((quiz)=>{
  if(quiz.username === username){
    const quizName=quiz.name
    const quizScore=quiz.score
    const quizTotal=quiz.total
    html+=`
    <div class="quiz-card js-quiz-card">
      <p class="quiz-name">${quizName}</p>
      <span class="quiz-score">${quizScore}/${quizTotal}</span>
    </div>
    `
  }
});
document.querySelector('.js-clear-btn').addEventListener('click',()=>{
  localStorage.removeItem('recentQuiz');
  document.querySelector('.js-quiz-list').innerHTML= `<p class="no-quiz">No quiz taken yet</p>`
}) 
if(recentQuiz.length === 0){
  document.querySelector('.js-quiz-list').innerHTML=`<p class="no-quiz">No quiz taken yet</p>`
}
else{
  document.querySelector('.js-quiz-list').innerHTML=html
}

