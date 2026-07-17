let cart = [];

function addCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  updateCart();

  alert(name + " Added To Cart");
}

function updateCart() {

  let items = document.getElementById("cartItems");

  let total = document.getElementById("total");

  items.innerHTML = "";

  let grandTotal = 0;

  cart.forEach((item) => {

    grandTotal += item.price;

    items.innerHTML += `
      <p>${item.name} - ₹${item.price}</p>
    `;

  });

  total.innerHTML = "Total ₹" + grandTotal;

}

function checkout() {

  let total = 0;

  let message = "🍲 *Greeva's Kitchen*%0A%0A";

  cart.forEach((item) => {

    total += item.price;

    message += "✅ " + item.name + " - ₹" + item.price + "%0A";

  });

  if(total < 200){

    alert("Minimum Order ₹200");

    return;

  }

  message += "%0A💰 Total : ₹" + total;

  message += "%0A%0A📍Location : Divya Sanskar City, TP-9, Sargasan";

  window.open(
  "https://wa.me/917778877642?text=" + message,
  "_blank"
  );

}
