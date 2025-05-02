import { fetchQuizQuestions } from "../data/questions.js";
function renderquestions(){
  const url=new URL(window.location.href);
  const name=url.searchParams.get('name')
  const id=url.searchParams.get('id')
  const number=url.searchParams.get('number')
  const time=url.searchParams.get('time')
  const difficulty=url.searchParams.get('difficulty');

  document.querySelector('.js-subject-name').innerHTML=name

  const durationInseconds=Number(time)*60;

  startTimer(durationInseconds);
  
  function startTimer(durationInseconds){
    let timeleft=durationInseconds
    const countdown=setInterval(()=>{
      const minutes=String(Math.floor(timeleft/60)).padStart(2,'0')
      const seconds=String(timeleft%60).padStart(2,'0')


      document.querySelector('.js-display-time').innerHTML=`${minutes}:${seconds}`;
          if(--timeleft < 0){
      clearInterval(countdown);
      document.querySelector('.js-display-time').innerHTML='00:00'
    }
    },1000)
  }


}
renderquestions()