const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const gamesite = document.getElementById("games");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

      if (username === "guest" && password === "") {
        window.location="indux.html";
    }
      if (username === "" && password === "") {
        window.location="indux.html";
    }

    if (username === "admin" && password === "hii" )  {
        window.location="indux.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
        if (username === "Raun" && password === "123" )  {
        window.location="indux.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
