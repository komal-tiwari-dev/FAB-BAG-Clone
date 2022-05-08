import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import { footer } from "../components/footer.js";
document.querySelector("#footer_").innerHTML = footer();

// upper slide JS chandan shrma

let slideposition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;
// console.log(totalSlides);

document
  .getElementById("carousel_buttom--next")
  .addEventListener("click", function () {
    moveNext();
  });

document
  .getElementById("carousel_buttom--prev")
  .addEventListener("click", function () {
    movePrev();
  });

function rollclick() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }
  slides[slideposition].classList.add("carousel_item--visible");
}

function moveNext() {
  if (slideposition === totalSlides - 1) {
    slideposition = 0;
  } else {
    slideposition++;
  }
  rollclick();
}

function movePrev() {
  if (slideposition === 0) {
    slideposition = totalSlides - 1;
  } else {
    slideposition--;
  }
  rollclick();
}
//setinterval for slide
setInterval(function () {
  moveNext();
}, 3000);

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

document.querySelector("#div-1").addEventListener("click", myfun1);
function myfun1() {
  // window.location.href = "index.html"
  console.log("hi");
}
document.querySelector("#div-2").addEventListener("click", myfun2);
function myfun2() {
  // window.location.href = "index.html"
  console.log("hi");
}
document.querySelector("#div-3").addEventListener("click", myfun3);
function myfun3() {
  // window.location.href = "index.html"
  console.log("hi");
}
document.querySelector("#div-4").addEventListener("click", myfun4);
function myfun4() {
  // window.location.href = "index.html"
  console.log("hi");
}
document.querySelector("#div-5").addEventListener("click", myfun5);
function myfun5() {
  // window.location.href = "index.html"
  console.log("hi");
}

//previous bag

// TESTIMONIALS js
let slideposition1 = 0;
const slides1 = document.getElementsByClassName("carousel1_item");
const totalSlides1 = slides1.length;
// console.log(totalSlides);

document
  .getElementById("carousel_buttom1--next")
  .addEventListener("click", function () {
    moveNext1();
  });

document
  .getElementById("carousel_buttom1--prev")
  .addEventListener("click", function () {
    movePrev1();
  });

function rollclick1() {
  for (let slide1 of slides1) {
    slide1.classList.remove("carousel1_item--visible");
    slide1.classList.add("carousel1_item--hidden");
  }
  slides1[slideposition1].classList.add("carousel1_item--visible");
}

function moveNext1() {
  if (slideposition1 === totalSlides1 - 1) {
    slideposition1 = 0;
  } else {
    slideposition1++;
  }
  rollclick1();
}

function movePrev1() {
  if (slideposition1 === 0) {
    slideposition1 = totalSlides1 - 1;
  } else {
    slideposition1--;
  }
  rollclick1();
}

//setInvetval
setInterval(function () {
  moveNext1();
}, 4000);

// last html js
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// TRENDING JAVASCRIPT

 let tndata = [
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/280154675_662157128379058_6632080097069729083_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=yxtOu9BEz0UAX_mk8KW&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_Cc4uLfVEuCNbMbNjiaesbJigjZo2vDjsU3j2_uVM_lw&oe=627A37A4",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279842470_293278966335801_7431247082036908895_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=uUEqzjrrD5gAX-f1R7T&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9tG3SHiM-ZVIrtgLwxICMjFPY_EyJel1pIs7GYJwcgfQ&oe=627A8097",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279763268_532493598580918_2309645971247741063_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=qtKpF1bQlmEAX9PX1mL&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_WxbedXj4qA4urv6SORsOlowcOqHQIp3ZAjSwIEvUDMw&oe=627991FF",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/280078594_1223755911761497_2934819991498115476_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=8fSR2to5lwsAX9Teh9F&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT90tyAeRmjyXuluj6fzQZNGnrKuwq6vgJ1jgd5MURDDiQ&oe=6279B003",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279690442_531630221670430_7682245722290914391_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=NcQAe4tmzMAAX8D2Zk3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9pfJHHrYwW-8eaRQ8gXNhV8Fuz066gfp4ssS-ioAA2WA&oe=6278B165",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279754469_728802825086106_2659596606794103187_n.jpg?_nc_cat=102&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=Op5nrgvIob0AX8oQDN4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_S_XbkfTzACDnJFcVtd1-LJFJQzZ3vtwTDE06M3yH3VA&oe=627A3B82",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279581933_497215932094707_6136128380394766149_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=G_yySAoOyjMAX9NUpms&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-FD4BmhFHoT-TWNSukQxs5AYVuZ0SVAub2YXuAf5AWfw&oe=62790492",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
  {
    image:
      "https://scontent.cdninstagram.com/v/t51.2885-15/279573265_1216110058925543_4773627696402831653_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=8ae9d6&_nc_ohc=8wyMl3aPvxIAX9Bc5R1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_aEmltRmDUggvXFeHzsDbuHDRSfr9uXwBK0vPRhzVJhA&oe=62791346",
    logo: "https://instafeed.nfcube.com/assets/img/instagram-logo.png",
  },
];

let showimg = (data) => {
  let div = document.querySelector("#td03");
  data.map(function (el) {
    let box1 = document.createElement("div");
    box1.setAttribute("class", "box103");
    let img = document.createElement("img");
    img.setAttribute("class", "tdimg");
    img.src = el.image;

    let box2 = document.createElement("div");
    box2.setAttribute("class", "box203");
    let instalogo = document.createElement("img");
    instalogo.setAttribute("class", "instaimg");
    instalogo.src = el.logo;

    box2.append(instalogo);
    box1.append(img, box2);
    div.append(box1);
  });
};
showimg(tndata);




// cart rflect

var count = localStorage.getItem("pro_count");

document.querySelector("#cartNo099").innerText = count
