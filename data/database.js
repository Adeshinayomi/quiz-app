export let user=JSON.parse(localStorage.getItem('userdata'));

if(!user){
  user=[]
}
console.log(user)

class database{
  email;
  password;

  constructor(user){
    this.email=user.email
    this.password=user.password
  }
}

export function addUserData(email,password){
  user.push({
    email:email,
    password:password
  })
  saveUserData()
  console.log(user)

}
function saveUserData(){
  localStorage.setItem('userdata',JSON.stringify(user))
}