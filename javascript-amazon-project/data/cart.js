export const cart = [];

export function addToCart(myProductId) {
    let matchingItem;
    
    cart.forEach((cartItem) => {
      if (myProductId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    }
    else {
      cart.push({
        productId: myProductId,
        quantity: 1
      });
    }
  }