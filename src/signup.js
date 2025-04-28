import { addUserData } from "../data/database.js";


const email=document.querySelector('.user-email')
const password=document.querySelector('.user-password')
const confirmPassword=document.querySelector('.user-confirm-paasword')
const loginBtn=document.querySelector('.js-login-btn');

loginBtn.addEventListener('click',()=>{
  if(email.value === '' &&  password.value === ''){
    document.querySelectorAll('.js-error-message').forEach((error)=>{
      error.innerHTML=`please fill these fields`
    })
  }else{
    document.querySelectorAll('.js-error-message').forEach((error)=>{
      error.innerHTML=``
    })
    const isEmailValid=email.value.includes('@gmail.com') || email.value.includes('@yahoo.com');
    if(!isEmailValid && password.value !== confirmPassword.value){
      document.querySelector('.js-error-message').innerHTML=`Email Address is invalid`
      document.querySelector('.js-password-error').innerHTML=`password does not match`
      
    }else if(isEmailValid && password.value !== confirmPassword.value){
      document.querySelector('.js-password-error').innerHTML=`password does not match`
      
    }else if(!isEmailValid && password.value === confirmPassword.value){
      document.querySelector('.js-error-message').innerHTML=`Email Address is invalid`
      
    }else if(isEmailValid && password.value === confirmPassword.value){
      document.querySelector('.js-password-error').innerHTML=`password does not match`
      document.querySelector('.js-error-message').innerHTML=``
      loginBtn.innerHTML='successful!..'
      setTimeout(()=>{
        loginBtn.innerHTML='Sign up'
      },2000)
      setTimeout(()=>{
        addUserData(email.value,password.value)
      },4000)
    
    }
  }
}) 
