import {navbar} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

import { footer } from "../components/footer.js";
document.querySelector("#footer_").innerHTML = footer();



// upper slide JS chandan shrma

let slideposition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;
// console.log(totalSlides);

document.getElementById("carousel_buttom--next").addEventListener("click", function () {
    moveNext()
})

document.getElementById("carousel_buttom--prev").addEventListener("click", function () {
    movePrev()
})


function rollclick() {
    for (let slide of slides) {
        slide.classList.remove("carousel_item--visible")
        slide.classList.add("carousel_item--hidden")
    }
    slides[slideposition].classList.add("carousel_item--visible")
}

function moveNext() {
    if (slideposition === totalSlides - 1) {
        slideposition = 0;
    }
    else {
        slideposition++;
    }
    rollclick()
}


function movePrev() {
    if (slideposition === 0) {
        slideposition = totalSlides - 1;
    }
    else {
        slideposition--;
    }
    rollclick()
}
//setinterval for slide
setInterval(function () {
    moveNext()
}, 3000)


// what's in the bag

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelector("#div-1").addEventListener("click", myfun1)
function myfun1() {
    // window.location.href = "index.html"
    console.log("hi")
}
document.querySelector("#div-2").addEventListener("click", myfun2)
function myfun2() {
    // window.location.href = "index.html"
    console.log("hi")
}
document.querySelector("#div-3").addEventListener("click", myfun3)
function myfun3() {
    // window.location.href = "index.html"
    console.log("hi")
}
document.querySelector("#div-4").addEventListener("click", myfun4)
function myfun4() {
    // window.location.href = "index.html"
    console.log("hi")
}
document.querySelector("#div-5").addEventListener("click", myfun5)
function myfun5() {
    // window.location.href = "index.html"
    console.log("hi")
}


//previous bag



// TESTIMONIALS js
let slideposition1 = 0;
const slides1 = document.getElementsByClassName("carousel1_item");
const totalSlides1 = slides1.length;
// console.log(totalSlides);

document.getElementById("carousel_buttom1--next").addEventListener("click", function() {
    moveNext1()
})

document.getElementById("carousel_buttom1--prev").addEventListener("click", function() {
    movePrev1()
})


function rollclick1() {
for (let slide1 of slides1)
{
    slide1.classList.remove("carousel1_item--visible")
    slide1.classList.add("carousel1_item--hidden")
}
slides1[slideposition1].classList.add("carousel1_item--visible")
}

function moveNext1() {
  if(slideposition1===totalSlides1-1)
  {
    slideposition1=0;
  }
  else{
    slideposition1++;
  }
  rollclick1()
}


function movePrev1() {
if(slideposition1===0)
  {
    slideposition1=totalSlides1-1;
  }
  else{
    slideposition1--;
  }
  rollclick1()
}

//setInvetval
setInterval(function() {
moveNext1()
},4000)


// last html js
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

