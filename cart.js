<!--script cart-->

    document.querySelector('.showCart').style.display = "none"
    let cart = JSON.parse(localStorage.getItem('giohang'));
showMyCart()
showCount()
if (cart == null){
    cart = new Array()
}
    function addToCart(x) {
        if (user == null){
            alert('hãy đăng nhập để mua sản phẩm')
            location.href= 'login.html'
        }else {
            let card = x.parentElement.children
            let img = card[0].children[0].src
            let productName = card[1].innerText
            let information = parseInt(card[4].value)
            let price = card[2].innerText
            let product = new Array(img, productName, information, price)
            let check = true
            for (let i = 0; i < cart.length; i++) {
                if (cart[i][1] == productName) {
                    check = false
                    information += cart[i][2]
                    cart[i][2] = information
                    break;
                }
            }
            if (check) {
                cart.push(product)
            }
            showCount()
            showMyCart()
            localStorage.setItem("giohang", JSON.stringify(cart))
        }
}
    function showCount() {
    document.querySelector('#count').innerHTML = cart.length
}

    function showMyCart() {
    let cartInformation="";
    let tong = 0
    let total;
    for (let i = 0; i < cart.length; i++) {
    total = parseInt(cart[i][2]) * parseInt(cart[i][3])
    tong += total
    cartInformation += `<tr>
        <td scope="row">${i + 1}</td>
        <td><img id="cart-img" src="${cart[i][0]}" alt=""></td>
        <td>${cart[i][1]}</td>
        <td>${cart[i][2]}</td>
        <td>${cart[i][3]}</td>

        <td>
        <div>${total}</div>
        </td>
        <td><button style="background-color: #fa4242; border-radius: 2px;border: 1px solid #f34545" onclick="deleteCart(${i})"><i class="bi bi-trash3-fill"></i></button></td>
    </tr>`
}
    cartInformation += `   <tr>
        <th colSpan="5">Tổng đơn hàng</th>
        <th>
            <div>${tong}</div>
        </th>
        <th><a href="./upload%20cart.html"><button class="btn btn-warning" >Xem giỏ hàng</button></a></th>
    </tr>`
    document.querySelector('#myCart').innerHTML = cartInformation;
}

    function showCart() {
    let x = document.querySelector('.showCart');
    if (x.style.display == "block") {
    document.querySelector('.showCart').style.display = "none"
} else {
    document.querySelector('.showCart').style.display = "block"

}

}
    // updateInformation

    // deleteCart
    function deleteCart(index) {
    cart.splice(index,1)
        localStorage.setItem('giohang' , JSON.stringify(cart))
    showMyCart()
    showCount()

}

