const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
var v1 = localStorage.getItem("v1"); 
var v2 = localStorage.getItem("v2"); 

    if (username === v1	&& password === v2) {
        alert("You have successfully logged in.");
        location.reload();
		window.location = 'welcome.html';
    } else {
        loginErrorMsg.style.opacity = 1;
		window.location= 'error.html';
		
    }
})