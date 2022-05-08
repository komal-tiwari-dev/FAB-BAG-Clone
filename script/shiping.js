// <=======================Right Div data Js=========================>

let priceFromServer = document.querySelector("#price242").innerText;
// console.log(priceFromServer);
let subTotal = document.querySelector("#final-total");
let FinalTotal = document.querySelector("#Rupee");

let y = Number(priceFromServer);

subTotal.innerHTML =y;
FinalTotal.innerHTML =y;

// console.log(y)

// localStorage.setItem("Price",JSON.stringify(FinalTotal.value));








//<===================coupon button js part====================================>
function myFunction(){
    //    console.log("hi");
         
         
         let button = document.querySelector("#couponApllied");
         
         let coupon = document.querySelector("#coupon230").value;
    
         if(coupon !== "" )
         {
           button.style.background = "black";
         }
         else{
              button.style.background = "#c8c8c8";
         }
    }
    
//<===================coupon button js part end==================================>


// <========================COD Update JS======================================>

function Add_COD_Amout(){
    let charge = 100;

    let free = document.querySelector("#COD_Charge");
    free.innerHTML = charge;

    let cod_plus_price = y+charge;

    let rupeetotal = document.querySelector("#Rupee");

    rupeetotal.innerHTML = cod_plus_price;

    

    

}


function BackToCard()
{
    // let charge = 100;

    // let free = document.querySelector("#COD_Charge");
    // free.innerHTML = charge;
    let free = document.querySelector("#COD_Charge");
    free.innerHTML = "Free";

    let cod_plus_price = y;

    let rupeetotal = document.querySelector("#Rupee");

    rupeetotal.innerHTML = cod_plus_price;
}


let loginData = JSON.parse(localStorage.getItem("currentUser"));
console.log(loginData.email)

let user_email = document.querySelector("#email2347");

user_email.innerHTML = loginData.email;




// sping cart
let sppingData = JSON.parse(localStorage.getItem("addData"));

let ptag = document.querySelector("#put0889");


sppingData.map(function(el,index,arr) {
    let ptag = document.querySelector("#put0889");
    ptag.innerText= null;

    ptag.innerText= `${el.city}, ${el.state}, ${el.pin}`
})
