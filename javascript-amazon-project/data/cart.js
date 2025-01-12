export let cart;

loadFromStorage();

export function loadFromStorage() {
	cart = JSON.parse(localStorage.getItem("cart")); // Get the cart from local storage

	// If there is no cart in local storage, create a default cart
	if (!cart) {
		cart = [
			{
				productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
				quantity: 2,
				deliveryOptionId: "1",
			},
			{
				productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
				quantity: 1,
				deliveryOptionId: "2",
			},
		];
	}
}

function saveToStorage() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(myProductId) {
	let matchingItem;

	// Check if the product is already in the cart
	cart.forEach((cartItem) => {
		if (myProductId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});
	// If the product is already in the cart, increase the quantity
	if (matchingItem) {
		matchingItem.quantity += 1;
	} else {
		cart.push({
			productId: myProductId,
			quantity: 1,
			deliveryOptionId: "1",
		});
	}

	saveToStorage();
}

export function removeFromCart(myProductId) {
	const newCart = [];

	// This for each loop will add all items to the newCart except the one with the productId that we want to remove
	cart.forEach((cartItem) => {
		if (cartItem.productId !== myProductId) {
			newCart.push(cartItem);
		}
	});

	cart = newCart;

	saveToStorage();
}

// This function will update the delivery option for a specific product in the cart
export function updateDeliveryOption(myProductId, myDeliveryOptionId) {
	let matchingItem;

	cart.forEach((cartItem) => {
		if (myProductId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});

	matchingItem.deliveryOptionId = myDeliveryOptionId;

	saveToStorage();
}

export function loadCart(fun) {
	const xhr = new XMLHttpRequest();

	xhr.addEventListener("load", () => {
		console.log(xhr.response);
		fun(); // callback function (a function that run in the future)
	});

	xhr.open("GET", "https://supersimplebackend.dev/cart");
	xhr.send();
}
