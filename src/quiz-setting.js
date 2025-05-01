 function loadTopicName(){
  const url=new URL(window.location.href)
  const name=url.searchParams.get('topic')
  
  document.querySelector('.topic-name').innerHTML=name
 }

 window.addEventListener('load',()=>{
  loadTopicName()
 })