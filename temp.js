const user = (Name, username, password, phoneno, regNo) => {
  return { Name, username, password, phoneno, regNo };
};

const user1 = user("wbfjhgsdjh", "mrudulsp1324", "12345", "931894379", "21BCE3386");

console.log(user1);

fetch(`http://localhost:3000/register`, {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user1),
})
.then(response => console.log(response));


