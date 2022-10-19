const token = window.localStorage.getItem("token")
loadUserCart()

async function purchaseUserCart(){
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
            alert("Error Loading Cart1")
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

