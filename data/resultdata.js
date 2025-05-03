export let scores=JSON.parse(localStorage.getItem('scores'))
export let results=JSON.parse(localStorage.getItem('results'))

if(!scores){
  scores=[]
}
if(!results){
  results=[]
}