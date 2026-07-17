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
let phone = "917778877642";


// WhatsApp Order Button

document.querySelector(".whatsapp").addEventListener("click", function(){

    let message = "Hello Greeva's Kitchen, I want to place an order.";

    let phone = "91XXXXXXXXXX";

    let url = 
    "https://wa.me/" + phone + "?text=" + 
    encodeURIComponent(message);


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

}
