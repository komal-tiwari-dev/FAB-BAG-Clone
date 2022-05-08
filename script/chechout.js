function cart(){
    window.location.href= "my_cart.html"
}
function cart2(){
    window.location.href= "my_cart.html"
}

let userdatal = JSON.parse(localStorage.getItem("currentUser"));
console.log(userdatal)
document.querySelector("#mail").value = userdatal.email


document.querySelector("#shipping").addEventListener("click", saveadd)

let adressData =  []   //JSON.parse(localStorage.getItem("addData")) ||

function saveadd () {

let addressdeatils = {
    name: document.querySelector("#firstName").value,
    lastname: document.querySelector("#lastName").value,
    compay: document.querySelector("#company").value,
    address : document.querySelector("#address").value,
    appartment: document.querySelector("#apartment").value,
    city: document.querySelector("#city").value,
    pin: document.querySelector("#pin").value,
    state: document.querySelector("#state").value,
    mobile: document.querySelector("#number").value,
}

adressData.push(addressdeatils)
// console.log(addressdeatils)
localStorage.setItem("addData", JSON.stringify(adressData));
window.location.href= "shipping.html"
}

// amount ke liye ye sb k rha roon
var count = localStorage.getItem("pro_count");
document.querySelector("#subtotal").innerText = `₹ ${Number(count)*599}.00`
document.querySelector("#total").innerText = `₹ ${Number(count)*599}.00`
document.querySelector("#pri").innerText = `₹ ${Number(count)*599}.00`
