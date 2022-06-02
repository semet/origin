import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "store";

const initialState: CartState = {
	items: [],
	amount: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state: CartState, { payload }: PayloadAction<CartItem>) => {
			const isProductExistsinCart = state.items.some((item) => item.id === payload.id);
			if (state.items.length > 0 && isProductExistsinCart) {
				const index = state.items.findIndex((item) => item.id === payload.id);
				state.items[index].quantity += 1;
			} else {
				state.items.push({
					id: payload.id,
					name: payload.name,
					images: payload.images,
					oldPrice: payload.oldPrice,
					price: payload.price,
					quantity: payload.quantity,
					sku: payload.sku,
					slug: payload.slug,
					weight: payload.weight,
					createdAt: payload.createdAt,
				});
			}
			state.amount += payload.quantity;
			state.total += payload.price;
		},

		increaseItem: (state: CartState, { payload }: PayloadAction<CartItem>) => {
			const index = state.items.findIndex((item) => item.id === payload.id);
			state.items[index].quantity += 1;
			state.amount += 1;
			state.total += payload.price;
		},

		decreaseItem: (state: CartState, { payload }: PayloadAction<CartItem>) => {
			const index = state.items.findIndex((item) => item.id === payload.id);
			state.items[index].quantity -= 1;
			state.amount -= 1;
			state.total -= payload.price;
		},

		removeItem: (state: CartState, { payload }: PayloadAction<CartItem>) => {
			const index = state.items.findIndex((item) => item.id === payload.id);
			state.items.splice(index, 1);
			state.amount -= payload.quantity;
			state.total -= payload.price;
		},

		calculateAmount: (state: CartState) => {
			state.amount = state.items
				.map((item) => item.quantity)
				.reduce((a, b) => a + b, 0);
		},

		calculateTotal: (state: CartState) => {
			state.total = state.items.map((item) => item.price).reduce((a, b) => a + b, 0);
		},
	},
});

export const { addItem, increaseItem, decreaseItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
