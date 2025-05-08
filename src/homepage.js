import { subjects } from "../data/homedata.js";


  const sidebar=document.querySelector('.js-side-bar');

  document.querySelector('.js-bar-icon').addEventListener('click',()=>{
   sidebar.classList.toggle('visible')
  })



 const category_btn= document.querySelector('.js-categories-cont')
category_btn.addEventListener('click',()=>{
 document.querySelector('.js-categories').classList.toggle('visible')
})

const setting_btn= document.querySelector('.js-setting-cont')
setting_btn.addEventListener('click',()=>{
 document.querySelector('.js-setting').classList.toggle('visible')
})
document.querySelector('.js-toggle-cont').addEventListener('click',()=>{
  document.querySelector('.js-setting').classList.remove('visible')
  document.querySelector('.js-toggle-cont').classList.toggle('toggled')
  document.body.classList.toggle('dark')
  document.querySelector('.js-header').classList.toggle('dark')
  document.querySelector('.js-side-bar').classList.toggle('dark')

 })
function loadCategories(name){
  let html=''
  subjects.forEach((subject)=>{
    const subjectName=subject.subject
    if(name === subjectName){
      document.querySelector('.js-category-name').innerHTML=`${subjectName}`
      const subjectTopics=subject.topics
      let topic=''
      subjectTopics.forEach((subjectTopic)=>{
       topic=subjectTopic.topic
       html+=`
       <div class="subject">
         <h4>${topic}</h4>
         <img src="images/icons/play-button.png" alt="" data-topic="${topic}" class="js-play-quiz">
       </div>
     `
      });
    }

  })
 
  document.querySelector('.js-subject-cont').innerHTML=html


  
  const searchBar=document.querySelector('.js-search-bar')
  function loadSearchItem(){
    subjects.forEach((subject)=>{
      if(subject.keywords.includes(searchBar.value)){
        const name=subject.subject
        loadCategories(`${name}`)
      }
    })
  }
  document.querySelector('.js-search-icon').addEventListener('click',()=>{
    loadSearchItem()
    searchBar.value=''
  })
  document.querySelectorAll('.js-play-quiz').forEach((play)=>{
    const name=play.dataset.topic;
    play.addEventListener('click',()=>{
      window.location=`quiz-settings.html?topic=${name}`
    })
  })
  document.querySelectorAll('.topics').forEach((topic)=>{
    topic.addEventListener('click',()=>{
      const name=topic.innerHTML
      sidebar.classList.remove('visible')
        loadCategories(`${name}`)
    })
  })
}

loadCategories('For You')

