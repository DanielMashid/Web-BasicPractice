class Cart {
	cartItems;
	#localStorageKey;

	constructor(localStorageKey) {
		this.#localStorageKey = localStorageKey;
		this.#loadFromStorage();
	}

	#loadFromStorage() {
		this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); // Get the cart from local storage

		// If there is no cart in local storage, create a default cart
		if (!this.cartItems) {
			this.cartItems = [
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

	saveToStorage() {
		localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
	}

	addToCart(myProductId) {
		let matchingItem;

		// Check if the product is already in the cart
		this.cartItems.forEach((cartItem) => {
			if (myProductId === cartItem.productId) {
				matchingItem = cartItem;
			}
		});
		// If the product is already in the cart, increase the quantity
		if (matchingItem) {
			matchingItem.quantity += 1;
		} else {
			this.cartItems.push({
				productId: myProductId,
				quantity: 1,
				deliveryOptionId: "1",
			});
		}

		this.saveToStorage();
	}

	removeFromCart(myProductId) {
		const newCart = [];

		// This for each loop will add all items to the newCart except the one with the productId that we want to remove
		this.cartItems.forEach((cartItem) => {
			if (cartItem.productId !== myProductId) {
				newCart.push(cartItem);
			}
		});

		this.cartItems = newCart;

		this.saveToStorage();
	}

	// This function will update the delivery option for a specific product in the cart
	updateDeliveryOption(myProductId, myDeliveryOptionId) {
		let matchingItem;

		this.cartItems.forEach((cartItem) => {
			if (myProductId === cartItem.productId) {
				matchingItem = cartItem;
			}
		});

		matchingItem.deliveryOptionId = myDeliveryOptionId;

		this.saveToStorage();
	}
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart);
console.log(businessCart);
