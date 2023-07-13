"use strict";

const url = "http://127.0.0.1:5501/TP-Cart/data.json";
const catalogNode = document.querySelector("#catalog");
const cartProductsNode = document.querySelector("#products");
const cartAmountNode = document.querySelector("#amount");
let cart = [];

(async function(){
    let products = await getData(url);
    
    for (const product of products)
    {
        
        createProductView(product);
    }
})();
async function getData(url)
{
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        return data;
    }
    catch(e)
    {
        return [];
    }
}
function createProductView(product)
{ 
    let imageNode = document.createElement('img');
        imageNode.alt = product.title;
        imageNode.src = product.illustration;

    let divLeftNode = document.createElement('div');
        divLeftNode.classList.add('flex-shrink-0');
        divLeftNode.append(imageNode);

    let productTitleNode = document.createElement('h5');
        productTitleNode.innerText = product.title;

    let productDescriptionNode = document.createElement('p');
        productDescriptionNode.innerText = product.description; 

    let priceNode = document.createElement('div');
        priceNode.classList.add('price');
        priceNode.classList.add('me-auto');
        priceNode.innerHTML = `${product.price} &euro;`;

    let addCartBtnNode = document.createElement('button');
        addCartBtnNode.classList.add('btn');
        addCartBtnNode.classList.add('btn-sm');
        addCartBtnNode.classList.add('btn-primary');
        addCartBtnNode.innerText = "Ajouter au panier";
        addCartBtnNode.dataset.id = product.id;
        addCartBtnNode.dataset.price = product.price;
        addCartBtnNode.addEventListener('click', addToCart);

    let priceLineNode = document.createElement('div');
        priceLineNode.classList.add('d-flex');
        priceLineNode.append(priceNode);
        priceLineNode.append(addCartBtnNode);

    let divRightNode = document.createElement('div');
        divRightNode.classList.add('flex-grow-1');
        divRightNode.classList.add('ms-3');
        divRightNode.append(productTitleNode);
        divRightNode.append(productDescriptionNode);
        divRightNode.append(priceLineNode);

    let productNode = document.createElement('div');
        productNode.classList.add('product');
        productNode.append(divLeftNode);
        productNode.append(divRightNode);
        console.log(productNode);

     catalogNode.append(productNode); 
}
function addToCart(event)
{
    const btn = event.target;
    const productId = parseInt(btn.dataset.id);
    const productPrice = parseFloat(btn.dataset.price);

    // Search product index in cart
    const productIndex = cart.findIndex(({ id }) => id === productId);

    if(productIndex < 0)
    {
        cart.push ({
            id: productId,
            price: productPrice,
            quantity: 1
        });
    }
    else {
        cart[productIndex].quantity++;
    }
   refreshCartView();
}
function refreshCartView()
{
    let cartProducts = 0;
    let cartAmount = 0;

    for (const product of cart)
    {
        cartProducts += product.quantity;
        cartAmount += product.quantity * product.price;
         console.log(cartProducts);
    }

    cartAmount = cartAmount.toFixed(2);

    cartProductsNode.innerHTML = cartProducts;
    cartAmountNode.innerHTML = cartAmount;
}


