const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const mainForm = document.getElementById("main-form");
const greeting = mainForm.querySelector(".greeting");
const logout = document.querySelector("#logout");
const footer = document.querySelector(".footer");

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintMainForm(username);
}

function paintMainForm(username) {
    greeting.innerText = `Hello, ${username} !`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainForm.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
}

function onClicklogOut() {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    mainForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintMainForm(savedUserName);
}

logout.addEventListener("click", onClicklogOut);