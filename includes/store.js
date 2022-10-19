const token = window.localStorage.getItem("token")

function Addtocart(x){
    debugger;
    const productId = x;
    quantityValue = document.getElementById(x).value;
    quantityValue = parseInt(quantityValue);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"productid":productId,"quantity":quantityValue});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://vmedu260.mtacloud.co.il:8091/cart/addtocart", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        alert("המוצר התווסף בהצלחה לעגלה")
    }
