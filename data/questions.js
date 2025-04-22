// Function to fetch quiz questions
function fetchQuizQuestions() {
  const apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Quiz Questions:', data.results);
      // You can process and display the questions here
    })
    .catch(error => {
      console.error('Error fetching quiz questions:', error);
    });
}

// Call the function to fetch questions
fetchQuizQuestions();