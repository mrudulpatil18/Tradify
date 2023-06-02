const registerUser = (event) => {
    event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const username = document.querySelector("#registration-form #username").value;
  const password = document.querySelector("#registration-form #password").value;
  const phoneno = document.querySelector("#registration-form #phoneNo").value;
  const Name = document.querySelector("#registration-form #name").value;
  const regNo = document.querySelector("#registration-form #regNo").value;


  const user = {
    username,
    password,
    phoneno,
    Name,
    regNo
  };

  console.log(user);

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
    .then(wrapper.classList.remove('active'))

     .catch(error => {
       // Handle any errors that occurred during the request
       console.error(error);
       // You can display an error message to the user or perform any other error handling logic
     });
}

export default registerUser;