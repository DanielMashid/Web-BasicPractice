// Simulate the delivery options available for the user to choose from

export const deliveryOptions = [
	{
		id: "1",
		deliveryDays: 7,
		priceCents: 0,
	},
	{
		id: "2",
		deliveryDays: 3,
		priceCents: 499,
	},
	{
		id: "3",
		deliveryDays: 1,
		priceCents: 999,
	},
];

// Get the delivery option by its ID
export function getDeliveryOption(deliveryOptionId) {
	let deliveryOption;

	deliveryOptions.forEach((option) => {
		if (option.id === deliveryOptionId) {
			deliveryOption = option;
		}
	});

	// If the delivery option is not found, return the first one
	return deliveryOption || deliveryOptions[0];
}
