import { addUserData } from "../data/database.js";
const email=document.querySelector('.user-email')
const password=document.querySelector('.user-password')
const loginBtn=document.querySelector('.js-login-btn');

loginBtn.addEventListener('click',()=>{
  addUserData(email.value,password.value);
}) 
