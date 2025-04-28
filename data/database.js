export let user=JSON.parse(localStorage.getItem('userdata'));

if(!user){
  user=[]
}

class database{
  email;
  password;

  constructor(user){
    this.email=user.email
    this.password=user.password
  }
}

export function addUserData(email,paasword){
  user.push({
    email:email,
    password:paasword
  })
  saveUserData()
  console.log(user)

}
function saveUserData(){
  localStorage.setItem('userdata',JSON.stringify(user))
}