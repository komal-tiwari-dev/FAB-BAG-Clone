


import {navbar} from "../components/navbar.js"

document.getElementById("navv").innerHTML=navbar();

import {footer} from "../components/footer.js"

document.getElementById("foott").innerHTML=footer();



	function gotosignin(){
		window.location.href="./signin.html"
		console.log("login")
	}



	let register = async (event) => {
    event.preventDefault();

    let form_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
    };

    form_data = JSON.stringify(form_data);

    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: form_data,
        // mode: "no-cors"
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res.json();
    console.log(data);

	let error=data.error;
	console.log(error);

	if(error){
		alert("user already exist")
	}
	else{
		alert("account created")
        window.location.href="./signin.html"

	}
  



};

  document.getElementById("submit").addEventListener("click", register);



