const loginForm = document.querySelector("#loginForm");    // form 전체
const loginName = loginForm.querySelector("#loginName"); // form 중 input
const loginPw = loginForm.querySelector("#loginPw");
const greeting = document.querySelector("#greeting");   // 시간과 함께 나오는 이름창

const HIDDEN_CLASS = "hidden"
const USER_NAME_KEY = "username"

function onLoginSubmit(e){
    e.preventDefault();
    const name = loginInput.value;
    
    // loginForm.classList.add(HIDDEN_CLASS)
    // const userName = loginInput.value
    // localStorage.setItem(USER_NAME_KEY, userName)
    // paintGreeting(userName)
}

// function paintGreeting(username){
//     greeting.classList.remove(HIDDEN_CLASS)
//     greeting.innerText = ` Hello, \n ${username} `
// }

// const savedUserName = localStorage.getItem(USER_NAME_KEY)

// if(savedUserName === null){
//     loginForm.classList.remove(HIDDEN_CLASS)
//     loginForm.addEventListener("submit", onLoginSubmit)
// }
// else{
//     paintGreeting(savedUserName)
// }
