import { subjects } from "../data/homedata.js"

document.querySelector(".js-back-button").addEventListener("click",()=>{
  window.history.back()
})

function loadTopicName(){
  const url=new URL(window.location.href)
  const name=url.searchParams.get('topic')
  
  document.querySelector('.topic-name').innerHTML=name

  
 const number=document.querySelector('.js-question-number')
 const time=document.querySelector('.js-question-time')
 const difficulty=document.querySelector('.js-question-difficulty')

 let id=""

 subjects.forEach((subject)=>{
  const topic=subject.topics
  topic.forEach((topic)=>{
    if(name === topic.topic){
      id=topic.id
    }
  })

 })

  document.querySelector('.js-start-btn').addEventListener('click', ()=>{
      window.location=`question.html?name=${name}&id=${id}&number=${number.value}&time=${time.value}&difficulty=${difficulty.value}`
  })
 }

 window.addEventListener('load',()=>{
  loadTopicName()
 })
