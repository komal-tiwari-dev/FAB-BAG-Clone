function checkout() {
    window.location.href = "checkout.html"
}

var count = localStorage.getItem("pro_count");
let pricehard = 599.00
document.querySelector("#qty0889").value = count

document.querySelector("#priceFinal").innerText = `${Number(count)*pricehard}.00`

document.querySelector("#totalPrice").innerText = `${Number(count)*pricehard}.00`