"use strict";

// ----------------- SIGN UP ---------------- //

let username = document.getElementById("email-address");
let password = document.getElementById("password");
let signup = document.getElementById("signin");

function submitSignup(e) {
    e.preventDefault();

    const user = {
        username: username.value,
        password: password.value
    }
    console.log(user)

    if (user.username.trim().length === 0 || user.password.trim().length === 0) {
        console.log("please enter your email address and   password")
    } else {
        fetch('http://178.62.198.221:3003/user/login', {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(user)
        }).then((resolve) => {
            return resolve.json()
        }).then((result) => {

            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.user.id)
            localStorage.setItem('username', result.user.username)

            let token = localStorage.getItem('token')

            if (token) {
                window.location.replace("./index.html");
            }
        })
    }

}

signup.addEventListener('submit', (e) => {
    submitSignup(e)
})


document.cookie = {
    
}
