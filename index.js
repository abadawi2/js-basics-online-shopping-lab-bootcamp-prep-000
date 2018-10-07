var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem= {
   'itemName': item,
   'itemPrice': Math.random() * (99 - 0) + 1};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0) {
  return 'Your shopping cart is empty.'
  }
  var itemPrice = [];
  for (var i = 0; cart.length > i; i++){
    itemPrice.push (`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
    if (cart.length === 1){
      return `In your cart, you have ${itemPrice}.`
    }
    else if (cart.length === 2){
      return `In your cart, you have ${itemPrice[0]}, and ${itemPrice[1]}.`
    }
    else {
      var string = 'In your cart, you have '
      for (var i = 0; i < cart.length - 1; i ++) {
      string = string + itemPrice[i].join(',');
      }
      return string + `and ${itemPrice[itemPrice.length - 1]}.`;
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
