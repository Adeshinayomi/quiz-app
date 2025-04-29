import { addUserData,user} from "../data/database.js";

const name=document.querySelector('.user-name')
const email=document.querySelector('.user-email')
const password=document.querySelector('.user-password')
const confirmPassword=document.querySelector('.user-confirm-paasword')

document.querySelector('.sign-up').addEventListener('submit',(e)=>{
  e.preventDefault();
  document.querySelector('.js-user-error').innerHTML=''
  
  const inputs=document.querySelectorAll('.input')

  inputs.forEach((input)=>{
    const id=input.dataset.name
    document.querySelector(`.${id}-error`).innerHTML=''
  })

  let isValid=true
  let isEmailValid = email.value.includes('@gmail.com') || email.value.includes('@yahoo.com');

  inputs.forEach((input)=>{
    const id=input.dataset.name
    if(input.value === ''){
      document.querySelector(`.${id}-error`).innerHTML='This field is required'
      isValid = false
    } 
  })

  if(!isEmailValid){
    document.querySelector('.email-error').innerHTML=`Invalid email`
    isValid =false
  } 
  if(password.value !== confirmPassword.value){
    document.querySelector('.confirm-password-error').innerHTML=`password does not match`
    isValid = false
  }
  user.forEach((user)=>{
    if(user.email === email.value){
      document.querySelector('.js-user-error').innerHTML=`Email Address already in use`
      isValid=false
    }
  })

  if(isValid){
    localStorage.setItem('username',name.value)
    document.querySelector('.js-user-error').innerHTML=''
    setTimeout(()=>{
      document.querySelector('.js-login-btn').innerHTML='<a>Sign up sucessful</a>'
      addUserData(email.value,password.value,name.value)
    },1000)
    setTimeout(()=>{
      window.location='Homepage.html'
    },2500)
  }
})


// const email=document.querySelector('.user-email')
// const password=document.querySelector('.user-password')
// const confirmPassword=document.querySelector('.user-confirm-paasword')
// const loginBtn=document.querySelector('.js-login-btn');

// loginBtn.addEventListener('click',()=>{
//   if(email.value === '' &&  password.value === ''){
//     document.querySelectorAll('.js-error-message').forEach((error)=>{
//       error.innerHTML=`please fill these fields`
//     })
//   }else{
//     document.querySelectorAll('.js-error-message').forEach((error)=>{
//       error.innerHTML=``
//     })
//     const isEmailValid=email.value.includes('@gmail.com') || email.value.includes('@yahoo.com');
//     if(!isEmailValid && password.value !== confirmPassword.value){
//       document.querySelector('.js-error-message').innerHTML=`Email Address is invalid`
//       document.querySelector('.js-password-error').innerHTML=`password does not match`
      
//     }else if(isEmailValid && password.value !== confirmPassword.value){
//       document.querySelector('.js-password-error').innerHTML=`password does not match`
      
//     }else if(!isEmailValid && password.value === confirmPassword.value){
//       document.querySelector('.js-error-message').innerHTML=`Email Address is invalid`
      
//     }else if(isEmailValid && password.value === confirmPassword.value){
//       document.querySelector('.js-password-error').innerHTML=``
//       document.querySelector('.js-error-message').innerHTML=``
//       loginBtn.innerHTML='successful!..'
//       setTimeout(()=>{
//         loginBtn.innerHTML='Sign up'
//       },2000)
//       setTimeout(()=>{
//         addUserData(email.value,password.value)
//       },4000)
    
//     }
//   }
// }) 
