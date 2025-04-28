import { user } from "../data/database.js";

const email=document.querySelector('.user-email')
const password=document.querySelector('.user-password')
const loginBtn=document.querySelector('.js-login-btn');

export let oldUser=''
document.querySelector('.login').addEventListener('submit',(e)=>{
  e.preventDefault()
  user.forEach((user)=>{
    if(email.value === '' && password.value === ''){

      document.querySelector('.email-error').innerHTML=`This field is required`
      document.querySelector('.password-error').innerHTML=`This field is required `

    }else if(email.value === user.email && password.value === user.password){

      document.querySelector('.email-error').innerHTML=``
      document.querySelector('.password-error').innerHTML=` `

      oldUser=user
      setTimeout(()=>{
        loginBtn.innerHTML='<a>login successful!</a>'
      },500)   
      setTimeout(()=>{
        window.location='Homepage.html'
      },2000)
      
    }else if(email.value !== user.email && password.value === user.password){
     document.querySelector('.email-error').innerHTML=`Invalid Email`
     document.querySelector('.password-error').innerHTML=``
    }else if(email.value === user.email && password.value !== user.password){
     document.querySelector('.email-error').innerHTML=``
     document.querySelector('.password-error').innerHTML=`password is incorrect`
    }else if(email.value !== user.email && password.value !== user.password){
     document.querySelector('.email-error').innerHTML=`Invalid Email`
     document.querySelector('.password-error').innerHTML=`password is incorrect`
    }
  })
})