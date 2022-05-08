// product href js
function twitter() {
    window.location.href = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.fabbag.com%2Fproducts%2Fsubscribe&text=The%20AweSummer%20May%20Fab%20Bag"
}

function facebook() {
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.p"
}
function google() {
    window.location.href = "https://plus.google.com/share?url=https://www.fabbag.com/products/subscribe"

}


// Description JS
function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";

evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();




// related products

var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay:true,
        loopFillGroupWithBlank: true,
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

   