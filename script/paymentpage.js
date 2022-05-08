
document.querySelector("#paytm-display").addEventListener("click",displayblockPaytm)

 function displayblockPaytm() {
    let divCard2 = document.querySelector("#paytm-block_innerdiv230");
    divCard2.style.display = "block";

    let divCard = document.querySelector("#innerdiv230");
    divCard.style.display = "none";

    let div1 = document.querySelector("#cod-block_innerdiv230");
     div1.style.display = "none";
    
}
// <===========================display block function===================================>
document.querySelector("#card-display").addEventListener("click",displayblockCard2)

function displayblockCard2() {
    let divCard = document.querySelector("#innerdiv230");
    divCard.style.display = "block";

    let divCard2 = document.querySelector("#paytm-block_innerdiv230");
    divCard2.style.display = "none";

    let div1 = document.querySelector("#cod-block_innerdiv230");
     div1.style.display = "none";
    
}

document.querySelector("#cod230").addEventListener("click",displayblockCOD3);

function displayblockCOD3(){
     let div1 = document.querySelector("#cod-block_innerdiv230");
     div1.style.display = "block";

     let div2 = document.querySelector("#paytm-block_innerdiv230");
     div2.style.display = "none";

     let div3 = document.querySelector("#innerdiv230");
     div3.style.display = "none";
}

// <===========================display block function===================================>

// <===================================Change address Function JS Part=============================>
let changeadd = document.querySelector("#Change230").addEventListener("click",ChangeAddress);
let sameadd =  document.querySelector("#Same230").addEventListener("click",SameAddress);


function ChangeAddress(){
    let div = document.querySelector("#ChangeAddress");
    div.style.display = "block";
}

function SameAddress(){
     let div = document.querySelector("#ChangeAddress");
     div.style.display = "none";
}

// <===================================Change address Function JS Part end=============================>


//<===================coupon button js part====================================>//
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

 //<===================coupon button js part end====================================>//

//  <=========================footer js part=======================================>//

function toggle(){
     var blur = document.getElementById('universe');
     blur.classList.toggle('active')
     var popup_refund = document.getElementById('popup_refund');
     popup_refund.classList.toggle('active');
}

// import { refundPara } from "./Refund Policy/refund.js";
// let refund2 = document.querySelector("#refund_parax");

// refund2.innerHTML = refundPara()


// <=============================COD Charge JS==========================>

function AddCharges()
{
     let charge = 100;

    let free = document.querySelector("#COD_Charge");
    free.innerHTML = charge;

    let cod_plus_price = y+charge;

    let rupeetotal = document.querySelector("#Rupee");

    rupeetotal.innerHTML = cod_plus_price;
}


function Backtonormal()
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

let user_email = document.querySelector("#email2348");

user_email.innerHTML = loginData.email;



// sping cart
let sppingData = JSON.parse(localStorage.getItem("addData"));


sppingData.map(function(el,index,arr) {
    let ptag = document.querySelector("#meraGhar");
    ptag.innerText= null;

    ptag.innerText= `${el.city}, ${el.state}, ${el.pin}`
})


// // cart value amount
var count = localStorage.getItem("pro_count");
let pricehard = 599.00

document.querySelector("#u_price").innerHTML = `${Number(count)*pricehard}.00`

document.querySelector("#final-total").innerText = `${Number(count)*pricehard}.00`
document.querySelector("#Rupee").innerText = `${Number(count)*pricehard}.00`




