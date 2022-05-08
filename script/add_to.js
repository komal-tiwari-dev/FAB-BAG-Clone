document.querySelector("#price0899").innerText= "599.00"

      document.getElementById("dec").addEventListener("click", decFun)
      var count = localStorage.getItem("pro_count") || 1
    function decFun(){
        if( count>1){
            count--
        }
        document.getElementById("counter").innerText = count
    
    localStorage.setItem("pro_count", count)

    }
    

    document.getElementById("inc").addEventListener("click", incFun)
   function incFun(){
        count++
        document.getElementById("counter").innerHTML= count
        localStorage.setItem("pro_count", count)
    }

    function twitter(){
        window.location.href = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.fabbag.com%2Fproducts%2Fsubscribe&text=The%20AweSummer%20May%20Fab%20Bag"
    }

    function facebook(){
        window.location.href= "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.p"
    }
    function google(){
        window.location.href = "https://plus.google.com/share?url=https://www.fabbag.com/products/subscribe"

    }

    function changePrice(){
         document.getElementById("price0899").innerText = "599.00"
       }

       function changePrice1(){
           document.getElementById("price0899").innerText = "1,599.00"
       }
       function toCartPage(){
           window.location.href= "my_cart.html"
       }


       var box3 = document.getElementById("returnData")
       function showDesc(){
           var box1 = document.getElementById("descData")
           if(box1.style.display== "none" ){
               box1.style.display = "block"
               box3.style.display= "none"
           }
        //    else {
        //        box1.style.display = "none"
        //    }
       }
       
       function showReturn(){
           let box3 = document.getElementById("returnData")
           if(box3.style.display== "none"){
               box3.style.display = "block"
           }
           else {
               box3.style.display = "none"
           }
       }
