import registerUser from "./registerUser";

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const lightModeBtn = document.querySelector("#lightmode");

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('activ-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('activ-popup');
});

lightModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        lightModeBtn.innerHTML = "Dark";
    } else {
        lightModeBtn.innerHTML = "Light";
    }
  });


const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  registerUser(event);
});


const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  registerUser(event);
});