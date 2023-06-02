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


// Get the registration form element
const registrationForm = document.getElementById("registration-form");

// Add an event listener to the form submit event
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const username = document.querySelector("#registration-form input[name='username']").value;
  const password = document.querySelector("#registration-form input[name='password']").value;
  const phoneNumber = document.querySelector("#registration-form input[name='phoneNumber']").value;
  const name = document.querySelector("#registration-form input[name='name']").value;
  const registerNumber = document.querySelector("#registration-form input[name='registerNumber']").value;


  const user = {
    username,
    password,
    phoneNumber,
    name,
    registerNumber
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log(data);
      // You can perform any additional actions here, such as showing a success message or redirecting to another page
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
      // You can display an error message to the user or perform any other error handling logic
    });
});
