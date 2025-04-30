let username=localStorage.getItem('username')
 document.querySelector('.js-user-name').innerHTML=username
  const sidebar=document.querySelector('.js-side-bar');
  
  document.querySelector('.js-bar-icon').addEventListener('click',()=>{
  sidebar.classList.toggle('visible')
 })