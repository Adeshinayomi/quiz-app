import { fetchQuizQuestions,loadQuestionNumber} from "../data/questions.js";;
import { scores,answers,results } from "../data/resultdata.js";

async function renderquestions() {
  let index = 0;
  let score=0

  const url = new URL(window.location.href);
  const name = url.searchParams.get('name');
  const id = url.searchParams.get('id');
  const number = url.searchParams.get('number');
  const time = url.searchParams.get('time');
  const difficulty = url.searchParams.get('difficulty');

  const apiUrl = `https://opentdb.com/api.php?amount=${number}&category=${id}&difficulty=${difficulty}`;
  const questions = await fetchQuizQuestions(apiUrl);
   
  document.querySelector('.js-subject-name').innerHTML = name;

  const durationInSeconds = Number(time) * 60;
  startTimer(durationInSeconds);

  function startTimer(durationInSeconds) {
    let timeLeft = durationInSeconds;
    const countdown = setInterval(() => {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const seconds = String(timeLeft % 60).padStart(2, '0');

      document.querySelector('.js-display-time').innerHTML = `${minutes}:${seconds}`;
      if (--timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector('.js-display-time').innerHTML = '00:00';
      }
    }, 1000);
  }
  loadQuestionNumber(number, document.querySelector('.js-number-cont'))


  function displayQuestion() {
    const question = questions[index];
    const options = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(options); // Shuffle the options

    document.querySelector('.js-questions-cont').innerHTML = `
      <div class="question">
        <h4>Q${index + 1} of ${number}<br>
          ${index + 1}. ${question.question}
        </h4>
        <div class="option-cont">
          ${options
            .map(
              (option, i) =>
                `<span class="option" data-id='${index + 1}' data-answer="${option}">${String.fromCharCode(65 + i)}: ${option}</span>`
            )
            .join('')}
        </div> 
      </div>
      <div class="question-btn">
        <button class="prev-btn">Prev</button>
        <button class="next-btn">Next</button>
        <button class="submit-btn js-submit-btn"><a>Submit</a></button>
      </div>
    `;

    if(!results.includes(document.querySelector('.js-questions-cont').innerHTML)){
      results.push(document.querySelector('.js-questions-cont').innerHTML)
    }
    document.querySelector('.prev-btn').addEventListener('click', () => {
      if (index > 0) {
        index--;
        displayQuestion();
      }
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
      if (index < questions.length - 1) {
        index++;
        displayQuestion();
      }
    });
    document.querySelectorAll('.js-question-number').forEach((number)=>{
      number.addEventListener('click',()=>{
        const numberValue=number.innerHTML
        index=numberValue-1
        displayQuestion()
      })
    })
     document.querySelectorAll('.option').forEach((option)=>{
      option.addEventListener('click',()=>{
        if(option.classList.contains('answered')){
          return
        }
        document.querySelectorAll('.option').forEach((option)=>{
          option.classList.remove('answered')
        })
        const optionPicked=option.dataset.answer
        const correct= document.createElement('span');
        correct.classList.add('.correct')
        correct.innerHTML=question.correct_answer
        console.log(optionPicked===correct.innerHTML)
        if(optionPicked === correct.innerHTML){
          if(score<number){
            score++
          }
        }else{
          if(score>0){
            score--
          }
        }
        answers.push({
          your_answer:optionPicked,
          correct_answer:correct.innerHTML
        })
        option.classList.add('answered')
        const questionNumber=option.dataset.id

        document.querySelectorAll('.js-question-number').forEach((number)=>{
          if(number.innerHTML === questionNumber){
            console.log(number.innerHTML)
            number.classList.add('answered')
          }
        })
      })
    })
    
    document.querySelector('.js-submit-btn').addEventListener('click',()=>{
      scores.push({
        score:score,
        total:number
      })
      localStorage.setItem('scores',JSON.stringify(scores))
      localStorage.setItem('answers',JSON.stringify(answers)) 
      localStorage.setItem('results',JSON.stringify(results)) 
      window.location.href=`./result.html?name=${name}`
      console.log(`${score} out of ${number}`)
    })

  }
  

  displayQuestion();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

renderquestions();