import { navbar } from "../component/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

let clickme = () => {
  let hid = document.querySelector("#hidden");
  hid.style.display = "block";
};
// document.querySelector("#clickagain").addEventListener('dblclick',function(){
let clickagain = () => {
  let hid = document.querySelector("#hidden");
  hid.style.display = "none";
};
