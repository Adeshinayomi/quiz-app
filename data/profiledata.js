export let recentQuiz=JSON.parse(localStorage.getItem('recentQuiz'))

if(!recentQuiz){
  recentQuiz=[]
}