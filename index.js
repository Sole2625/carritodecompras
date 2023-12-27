const items = [
  {
    idProduct: "product1",
    productName: "Gymnocalycium",
    price: 100,
    // count: 0,
  },
  {
    idProduct: "product2",
    productName: "Haworthia Limifolia",
    price: 250,
    // count: 0,
  },
  {
    idProduct: "product3",
    productName: "Dorsetenia Foetida",
    price: 300,
    // count: 0,
  },
];

var totalCarrito = 0;
var itemsEnCarrito = 0;
var cart = [];

function addToCart(idProducto) {
  const productoEnStock = cart.find((item) => {
    return item.idProduct === idProducto;
  });

  const productoEncontrado = items.find((item) => {
    return item.idProduct === idProducto;
  });

  if (!productoEnStock) {
    const productoAgregar = { ...productoEncontrado, count: 1}
    cart.push(productoAgregar);
  } else {
    productoEnStock.count++;
  }
  updateTotal()

}

function removeItem(idProducto) {

  const productoEncontrado = cart.find((item) => {
    return item.idProduct === idProducto;
  });

  if(!productoEncontrado) {
    return;
  }

  if (productoEncontrado.count === 1) {

    const indiceEnCart = cart.indexOf(productoEncontrado);

    cart.splice(indiceEnCart, 1)

  } else {
    productoEncontrado.count--;

  }
  updateTotal()

}

function updateTotal() {
  var subTotal = 0;

  for (item of cart) {
    let subTotalItem = item.count * item.price
    var subTotal = subTotal + subTotalItem

  }

  const cartCount = document.getElementById("cart");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  const itemsEnCarrito = cart.reduce((acumulado, item) => acumulado + item.count, 0)

  cartCount.textContent = `Carrito (${itemsEnCarrito})`;
  cartItems.innerHTML = "";
  
  cart.forEach((item) => {
    if (item.count > 0) {
      const li = document.createElement("li");
      
      
      li.textContent = `${item.productName} - $${item.price} - Cant: ${item.count}`;
      cartItems.appendChild(li);
    }
  });
  
  cartTotal.textContent = subTotal;
  totalCarrito = subTotal;

  console.log("(cart", cart)
  console.log("(itemsEnCarrito", itemsEnCarrito)
  console.log("(totalCarrito", totalCarrito)
}


function showCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'block';
}

function hideCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'none';
}

function checkout() {
  alert('Compra realizada. Total: $' + totalCarrito);
  cart = [];
  totalCarrito = 0;
  updateTotal();
  hideCart();
}





