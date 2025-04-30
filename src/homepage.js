let username=localStorage.getItem('username')
const userName=document.querySelector('.js-user-name');

  userName.innerHTML=username
  const sidebar=document.querySelector('.js-side-bar');

  document.querySelector('.js-bar-icon').addEventListener('click',()=>{
   sidebar.classList.toggle('visible')
  })

 document.querySelector('.js-user').addEventListener('click',()=>{
  userName.classList.toggle('visible')
 })