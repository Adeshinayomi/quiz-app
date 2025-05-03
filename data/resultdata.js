export let answers=JSON.parse(localStorage.getItem('answers'))
  export let scores=JSON.parse(localStorage.getItem('scores'))
export let results=JSON.parse(localStorage.getItem('results'))

if(!answers){
  answers=[]
}  
if(!scores){
  scores=[]
}
if(!results){
  results=[]
}