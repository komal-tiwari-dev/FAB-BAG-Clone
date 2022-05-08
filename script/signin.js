import {navbar} from "../components/navbar.js"

document.getElementById("navv").innerHTML=navbar();

import {footer} from "../components/footer.js"

document.getElementById("foott").innerHTML=footer();

  
  
  
  
  
//   function gotosignup() {
//   window.location.href = "/signup.html";
// }

let login = async (e) => {
  try {
    e.preventDefault();

    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    user_data = JSON.stringify(user_data);

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,

      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();

    let username = document.getElementById("username").value;
    getUserDetail(username, data.token);
    console.log(data);
  } catch (e) {
    alert("User does not exist");
  }
};

document.getElementById("signin").addEventListener("click", login);

let getUserDetail = async (username, token) => {
  console.log("here");
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  console.log("user data: ", data);

  localStorage.setItem("currentUser", JSON.stringify(data));

  //

  let error = data.error;
  console.log(error);

  if (error) {
    alert("user not found");
  } else {
    alert("account login");
    window.location.href="./index.html";
  }
};


