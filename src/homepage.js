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
    document.querySelector('.js-subject-cont').innerHTML=html
    document.querySelector('.js-subject-cont').classList.remove('error-cont')
  })
 
  
  const searchBar=document.querySelector('.js-search-bar');

  searchBar.addEventListener('keyup',(e)=>{
    loadSearchItem()

    if(e.key === 'Enter'){
      loadSearchItem()
    }
  })

  function loadSearchItem(){
    subjects.forEach((subject)=>{
      const searchCompatible=searchBar.value.toLowerCase()
      if(subject.keywords.includes(searchCompatible)){
        const name=subject.subject
        loadCategories(`${name}`)
        document.querySelector('.js-subject-cont').classList.remove('error-cont')
      }else if(searchBar.value === ''){
        loadCategories('For You')
        document.querySelector('.js-subject-cont').classList.remove('error-cont')
      }else{
        document.querySelector('.js-subject-cont').innerHTML='<p class="search-error">"No Result For Your Search"</p>'
        document.querySelector('.js-subject-cont').classList.add('error-cont')
      }
    })
  }
  document.querySelector('.js-search-icon').addEventListener('click',()=>{
    loadSearchItem()
    setTimeout(()=>{
       searchBar.value=''
    },1000)
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

