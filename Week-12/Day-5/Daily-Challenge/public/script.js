// const { json } = require("body-parser")


const inputUsernameLogin = document.querySelector('#username')
const inputPasswordLogin = document.querySelector('#password')

const inputFirstNameRegister = document.querySelector('#first-name')
const inputlastNameRegister = document.querySelector('#last-name')
const inputemailRegister = document.querySelector('#email')
const inputusernameRegister = document.querySelector('#username-register')
const inputPasswordRegister = document.querySelector('#password-register')



function login(e){
    e.preventDefault()
    const user = inputUsernameLogin.value
    const pass = inputPasswordLogin.value
    fetch('/login',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({user,pass})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);;
    })
    .catch(err=>console.log(err))


}
function register(e){
    e.preventDefault()
    
const fName = inputFirstNameRegister.value
const lName =inputlastNameRegister.value
const email =inputemailRegister.value
const usernameReg =inputusernameRegister.value
const passwordReg =inputPasswordRegister.value
    fetch('/register',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({fName, lName, email, usernameReg, passwordReg })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.log(err))
    
    // console.log(inputFirstNameRegister.value);
    // console.log(inputlastNameRegister.value);
    // console.log(inputemailRegister.value);
    // console.log(inputusernameRegister.value);    // console.log(inputPasswordRegister.value);

}