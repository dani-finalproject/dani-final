const token = window.localStorage.getItem("token")
loadUserCart()



async function paybypaypal() {
    // document.getElementById("demo").innerHTML = "Hello World";
       paypal.Buttons({

           // Set up the transaction
           createOrder: function(data, actions) {
               return actions.order.create({
                   purchase_units: [{
                       amount: {
                        //    value: getElementById("final-price")
                        value: 10 
                       }
                }]
            });
           },

           // Finalize the transaction
           onApprove: function(data, actions) {
               return actions.order.capture().then(function(orderData) {
                   // Successful capture! For demo purposes:
                  // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                  // var transaction = orderData.purchase_units[0].payments.captures[0];
                   //alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
                   alert("transaction commpleted by " + orderData.payer.name.given_name);
                   purchaseUserCart();
                   // Replace the above to show a success message within this page, e.g.
                   // const element = document.getElementById('paypal-button-container');
                   // element.innerHTML = '';
                   // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                   // Or go to another URL:  actions.redirect('thank_you.html');
               });
           }


       }).render('#paypal-button-container');
    }





async function purchaseUserCart(){

    const cartprice = document.getElementById("")
    

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    try {
        const response = await fetch("http://vmedu260.mtacloud.co.il:8091/cart/purchaseCart", requestOptions);
        if(response.ok){
            alert("Cart purchased")
        } else {
            alert("Error purchase Cart")
        }

    }catch (e) {
        alert("Error Loading Cart")
    }
}





async function loadUserCart(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const response = await fetch("http://vmedu260.mtacloud.co.il:8091/product/getCartProductsByCart", requestOptions);

        const data = await response.json()

        if(!response.ok){
            alert("Error Loading Cart1 ")
        } else {
            const cartBodyElement = document.getElementById("cart-body")

            const sumOfPrices = data.reduce((prev,curr)=>{
                return prev + curr.product.price * curr.quantity;
            },0);

            document.getElementById("final-price").textContent = `₪${sumOfPrices}`

            data.forEach((item)=>{
                const group = document.createElement("tr")

                group.classList.add("border-bottom")
                const name = document.createElement("td")
                const nameText = document.createTextNode(item.product.description)
                name.appendChild(nameText)
                group.appendChild(name);


                const amount = document.createElement("td")
                const amountText = document.createTextNode(item.quantity)
                amount.appendChild(amountText)
                group.appendChild(amount);


                const price = document.createElement("td")
                const priceText = document.createTextNode(item.product.price)
                price.appendChild(priceText)
                group.appendChild(price);


                const sum = document.createElement("td")
                const sumText = document.createTextNode(item.product.price * item.quantity)
                sum.appendChild(sumText)
                group.appendChild(sum);
                group.appendChild(sum);


                cartBodyElement.appendChild(group)
            })
        }

    }catch (e) {
        alert(e)
    }
}

