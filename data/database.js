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

export function addUserData(email,password,name){
  user.push({
    email:email,
    password:password,
    name:name
  })
  saveUserData()
  console.log(user)

}
function saveUserData(){
  localStorage.setItem('userdata',JSON.stringify(user))
}

// export function setUsername(name){
//   username=name
//   console.log(username)
// }