import { user } from "../data/database.js";

const email=document.querySelector('.user-email')
const password=document.querySelector('.user-password')
const loginBtn=document.querySelector('.js-login-btn');

function validateUser(){
  user.forEach((user)=>{
    if(email.value === user.email && password.value === user.password){
      alert('login successful')
    }
  })
}
loginBtn.addEventListener('click',()=>{
  validateUser()
})