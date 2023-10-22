var cartvalue=document.getElementById("cart-value");
var cart=document.getElementById("cart");
var AddToCart=document.getElementsByClassName("button");
var items =[
  {
    name: "This was our pact",
    quantity:0,
    dollar:7,
    cents:49,
  },

  {
    name: "The Famous Five",
    quantity:0,
    dollar:4,
    cents:59,
  },


  {
    name: "Matlida",
    quantity:0,
    dollar:6,
    cents:80,
  },



  {
    name: "Harry Potter",
    quantity:0,
    dollar:10,
    cents:0,
  },


  {
    name: "For Young Readers ",
    quantity:0,
    dollar:7,
    cents:29,
  },

  {
    name: "Wimpy Kid - DIY",
    quantity:0,
    dollar:4,
    cents:99,
  },

  {
    name: "Dart Board",
    quantity:0,
    dollar:17,
    cents:49,
  },

  {
    name: "Connect 4",
    quantity:0,
    dollar:19,
    cents:99,
  },

  {
    name: "Jenga",
    quantity:0,
    dollar:20,
    cents:99,
  },


 {
    name: "Monopoly",
    quantity:0,
    dollar:19,
    cents:49,
  },

  {
    name: "Bookmarks",
    quantity:0,
    dollar:12,
    cents:49,
  },
  

  {
    name: "Birthday card",
    quantity:0,
    dollar:19,
    cents:99,
  },
  

  {
    name: "Stuffed toys",
    quantity:0,
    dollar:15,
    cents:99,
  },
  

  {
    name: "Dream catcher drawing",
    quantity:0,
    dollar:18,
    cents:49,
  },
  
];
function updatecart(){
  let cart=0;
  for(index = 0;index<items.length;index++){
    cart=cart+items[index].quantity;
  }
  cartvalue.innerHTML=cart;
}

for (let i = 0; i < AddToCart.length; i++) {
  AddToCart[i].onclick = (e) => {
    items[i].quantity++;
    updatecart();
  };
}

var finalDollars = 0; // Corrected variable name
var finalCents = 0;
function updatePrice() {
  var totalInCents = 0;
  for (var index = 0; index < items.length; index++) {
    totalInCents += items[index].quantity * (items[index].dollar * 100 + items[index].cents); // Corrected calculation
  }
  finalDollars = Math.floor(totalInCents / 100);
  finalCents = totalInCents % 100;
  
  console.log("totalInCents: ", totalInCents);
}


var whatsappLink = "https://wa.me/8208844529?text=";

function updateWhatsappLink() {
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
    }
  }
  whatsappLink +=
  "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}
cart.onclick=() => {
  updatePrice();
  updateWhatsappLink();
  window.open(whatsappLink, "_blank");

for (let index = 0; index < items.length; index++) {
  if (items[index].quantity != 0) {
    console.log(
      "Item name: " +
        items[index].name +
        " - Quantity: " +
        items[index].quantity
    );
  }
}

console.log(
  "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
);
};