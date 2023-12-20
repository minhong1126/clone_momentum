const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden"
const USER_NAME_KEY = "username"

function onLoginSubmit(e){
    e.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASS)
    const userName = loginInput.value
    localStorage.setItem(USER_NAME_KEY, userName)
    paintGreeting(userName)
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASS)
    greeting.innerText = ` Hello, \n ${username} `
}

const savedUserName = localStorage.getItem(USER_NAME_KEY)

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit", onLoginSubmit)
}
else{
    paintGreeting(savedUserName)
}
