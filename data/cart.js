export let cart = JSON.parse(localStorage.getItem("cart")) || []

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    console.log(cart)
    console.log(cartItem.id)
    if (productId === cartItem.id) {
      matchingItem = cartItem;
    }
  });

  console.log(matchingItem)

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
    });
  }
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.id != productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}
