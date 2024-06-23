const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const iconClose = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

// Variables to store registered credentials
let storedUsername="";
let storedEmail = "";
let storedPassword = "";

function register() {
    let username2 = document.getElementById("email").value;
    let password2 = document.getElementById("password").value;
    
    // Store the credentials in localStorage
    localStorage.setItem("email", username2);
    localStorage.setItem("password", password2);
    
    console.log("Account created");
    alert("Registration successful!");
}

function login() {
    let webEmail = document.getElementById("email1").value;
    let webPass = document.getElementById("password1").value;
    
    // Retrieve stored credentials from localStorage
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    
    // Compare input values with stored credentials
    if (webEmail === storedEmail && webPass === storedPassword) {
        console.log("Login successful");
        window.location = "home.html";
    } else {
        console.log("Login failed");
        alert("Invalid email or password.");
    }
}