import { subjects } from "../data/homedata.js";

let username=localStorage.getItem('username')
const userName=document.querySelector('.js-user-name');

  userName.innerHTML=username
  const sidebar=document.querySelector('.js-side-bar');

  document.querySelector('.js-bar-icon').addEventListener('click',()=>{
   sidebar.classList.toggle('visible')
  })

 document.querySelector('.js-user').addEventListener('click',()=>{
  userName.classList.toggle('visible')
 });

 const category_btn= document.querySelector('.js-categories-cont')
category_btn.addEventListener('click',()=>{
 document.querySelector('.js-categories').classList.toggle('visible')
})

function loadCategories(){
  let html=''
  subjects.forEach((subject)=>{
    const subjectName=subject.subject
    document.querySelector('.js-category-name').innerHTML=`${subjectName}`
    const subjectTopics=subject.topics
    let topic=''
    subjectTopics.forEach((subjectTopic)=>{
     topic=subjectTopic.topic
    });
    html+=`
      <div class="subject">
        <h4><a href="question.html">${topic}</a></h4>
        <img src="images/icons/play-button.png" alt="">
      </div>
    `
  })
 
  document.querySelector('.js-subject-cont').innerHTML=html
}

document.querySelectorAll('.topics').forEach((topic)=>{
  topic.addEventListener('click',()=>{
    sidebar.classList.remove('visible')
      loadCategories()
  })
})