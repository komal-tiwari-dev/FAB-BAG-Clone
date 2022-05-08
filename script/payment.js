// import {navbar} from "../components/navbar.js"

// document.getElementById("navbar8777").innerHTML=navbar();



document.querySelector("button").addEventListener("click",sendotpfun)
function sendotpfun(){
    var cardname=document.querySelector("#name").value
    var cardnumber=document.querySelector("#cardnumber").value
    var expirydate=document.querySelector("#date").value
    var cvv=document.querySelector("#cvv").value
    if(cardname==""&&expirydate==""&&cardnumber==""&&cvv==""){
        alert("Payment details empty")
    }
    else{
        if(cardname==""){
        alert("Cardname empty")
    }
   else if(cardnumber==""){
    alert("Cardnumber empty")
   }
   else if(expirydate==""){
    alert("Expirydate empty")
   }
   else if(cvv==""){
    alert("Cvv empty")
   }
   else{
       let box = document.querySelector("#box")
       box.style.display = "none";

       let box1 = document.querySelector("#box1");
       box1.style.display = "block";
   }
    }
   
}


// otp js==================>

document.querySelector("#button1").addEventListener("click",subfun)

function subfun(){
    var text=document.querySelector("#name7").value
    
    if(text=="12345"){
        let div1 = document.querySelector("#box");
        div1.style.display = "none"

        let div2 = document.querySelector("#box1");
        div2.style.display = "none";

        let div3 = document.querySelector("#shopping");
        div3.style.display = "block";
    }
    else{
        alert("Invalid otp");
    }
}
