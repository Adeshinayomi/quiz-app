import { fetchQuizQuestions } from "../data/questions.js";

async function renderquestions() {
  let index = 0;

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
                `<span class="option">${String.fromCharCode(65 + i)}: ${option}</span>`
            )
            .join('')}
        </div> 
      </div>
      <div class="question-btn">
        <button class="prev-btn" ${index === 0 ? 'disabled' : ''}>Prev</button>
        <button class="next-btn" ${index === questions.length - 1 ? 'disabled' : ''}>Next</button>
        <button class="submit-btn"><a href="result.html">Submit</a></button>
      </div>
    `;

    // Add event listeners for navigation buttons
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