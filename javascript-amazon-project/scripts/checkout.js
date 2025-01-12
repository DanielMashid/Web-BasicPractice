import { renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

// Promises are used to handle asynchronous operations in JavaScript.
// Use promises instead of callbacks, promises help keep our code flat
// Promise all is used to run multiple promises at the same time, but it will wait for all of them to finish before moving on

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// nested callbacks
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
