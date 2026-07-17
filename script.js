// Smooth scroll effect

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        let target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// WhatsApp Number

// =========================
// Greeva's Kitchen Cart
// =========================

let cart = [];
let total = 0;

// Add Item
function addToCart(name, price) {

    let item = cart.find(i => i.name === name);

    if(item){

        item.qty++;

    }else{

        cart.push({

            name:name,

            price:price,

            qty:1

        });

    }

    updateCart();

}

// Update Cart
function updateCart(){

    let cartItems = document.getElementById("cartItems");

    let cartCount = document.getElementById("cartCount");

    let cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML="";

    total=0;

    let count=0;

    cart.forEach((item,index)=>{

        total += item.price * item.qty;

        count += item.qty;

        cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

<div class="qty">

<button onclick="decreaseQty(${index})">-</button>

<span>${item.qty}</span>

<button onclick="increaseQty(${index})">+</button>

</div>

<button class="remove" onclick="removeItem(${index})">

Remove

</button>

</div>

`;

    });

    if(cart.length==0){

        cartItems.innerHTML="<p>Your cart is empty.</p>";

    }

    cartTotal.innerHTML=total;

    cartCount.innerHTML=count;

}

// Increase Qty

function increaseQty(index){

    cart[index].qty++;

    updateCart();

}

// Decrease Qty

function decreaseQty(index){

    if(cart[index].qty>1){

        cart[index].qty--;

    }else{

        cart.splice(index,1);

    }

    updateCart();

}

// Remove Item

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}

// WhatsApp Order Button

document.querySelector(".whatsapp").addEventListener("click", function(){

    // WhatsApp Settings
const phone = "917778877642";

function orderNow(item) {
    const message = `Hello Greeva's Kitchen! 👋

I want to order:
🍽️ ${item}

Please share the details.`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

    window.open(url,"_blank");

});




// Hero Button

document.querySelector(".hero button").addEventListener("click", function(){

    document.querySelector("#contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});




// Simple Scroll Animation

window.addEventListener("scroll", function(){

    let boxes = document.querySelectorAll(
        ".box,.card"
    );


    boxes.forEach(box => {

        let position = box.getBoundingClientRect().top;

        let screen = window.innerHeight;


        if(position < screen - 100){

            box.style.opacity = "1";
            box.style.transform = "translateY(0)";

        }

    });

});




// Initial Animation Style

document.querySelectorAll(".box,.card")
.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "0.6s ease";

});    padding:0 8%;
    background:
    linear-gradient(
    rgba(214,40,40,0.75),
    rgba(214,40,40,0.75)
    ),
    url("food.jpg");

    background-size:cover;
    background-position:center;

}



.hero-content{
    color:white;
    max-width:600px;
}


.hero h1{

    font-size:55px;
    line-height:1.2;
    margin-bottom:20px;

}


.hero p{

    font-size:20px;
    margin-bottom:30px;

}


button{

    background:white;
    color:#d62828;
    border:none;
    padding:14px 35px;
    border-radius:30px;
    font-size:16px;
    cursor:pointer;
    font-weight:600;

}


button:hover{

    background:#111;
    color:white;

}



/* FEATURES */


.features{

    display:flex;
    justify-content:center;
    gap:25px;
    padding:60px 8%;

}


.box{

    flex:1;
    padding:30px;
    text-align:center;
    border-radius:15px;
    box-shadow:0 5px 20px rgba(0,0,0,0.1);

}


.box h3{

    color:#d62828;
    margin-bottom:10px;

}




/* COMMON SECTION */


section{

    padding:70px 8%;
    text-align:center;

}


section h2{

    font-size:35px;
    color:#d62828;
    margin-bottom:30px;

}



/* MENU */


.menu-container{

    display:flex;
    justify-content:center;
    gap:25px;

}


.card{

    width:300px;
    padding:35px;
    border-radius:15px;
    background:white;
    box-shadow:0 5px 20px rgba(0,0,0,0.1);

}


.card h3{

    color:#d62828;
    margin-bottom:15px;

}




/* ABOUT */


#about p{

    max-width:800px;
    margin:auto;
    line-height:1.8;

}



/* WHY */


.why ul{

    list-style:none;
    font-size:20px;
    line-height:2;

}



/* CONTACT */


.whatsapp{

    background:#d62828;
    color:white;
    margin-top:20px;

}




/* FOOTER */


footer{

    background:#d62828;
    color:white;
    padding:20px;
    text-align:center;

}



/* MOBILE RESPONSIVE */


@media(max-width:768px){


header{

    flex-direction:column;

}


nav{

    margin-top:15px;

}


.hero h1{

    font-size:35px;

}


.features,
.menu-container{

    flex-direction:column;

}


.card{

    width:100%;

}


      }  "_blank"
  );

}// ===============================
// Greeva's Kitchen Script
// ===============================

// WhatsApp Number
const phone = "917778877642";

// Dynamic Order Function
document.getElementById("placeOrderBtn").onclick=function(){

let name=document.getElementById("customerName").value;

let phone=document.getElementById("customerPhone").value;

let address=document.getElementById("customerAddress").value;

if(name=="" || phone=="" || address==""){

alert("Please Fill All Details");

return;

}

if(cart.length==0){

alert("Your Cart is Empty");

return;

}

let msg=`🍽️ *New Order - Greeva's Kitchen*%0A%0A`;

msg+=`👤 Name : ${name}%0A`;

msg+=`📞 Mobile : ${phone}%0A`;

msg+=`📍 Address : ${address}%0A%0A`;

msg+=`🛒 *Order Details*%0A`;

cart.forEach(item=>{

msg+=`${item.qty} x ${item.name} = ₹${item.qty*item.price}%0A`;

});

msg+=`%0A💰 *Total Bill : ₹${total}*`;

window.open(`https://wa.me/917778877642?text=${msg}`);

}.

Thank You ❤️`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Sticky Navbar

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#ffffff";

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="none";

}

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.review-card,.gallery-grid img").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});

// Gallery Image Popup

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.onclick=()=>{

let popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.alignItems="center";

popup.style.justifyContent="center";

popup.style.cursor="zoom-out";

popup.style.zIndex="99999";

let image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="15px";

popup.appendChild(image);

document.body.appendChild(popup);

popup.onclick=()=>{

popup.remove();

};

};

});

// Welcome Message

window.onload=()=>{

console.log("🍔 Welcome to Greeva's Kitchen");

};
// =========================
// Search Menu
// =========================

function searchFood(){

let input=document.getElementById("searchMenu").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

// =========================
// Category Filter
// =========================

function filterCategory(category){

let sections=document.querySelectorAll(".category");

sections.forEach(section=>{

if(category=="all"){

section.style.display="block";

}

else if(section.classList.contains(category)){

section.style.display="block";

}

else{

section.style.display="none";

}

});

}
